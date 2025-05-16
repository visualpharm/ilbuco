#!/usr/bin/env python3
import os
import shutil
import sys
from PIL import Image, ImageTk
import tkinter as tk
from tkinter import ttk

class ImageOrganizer:
    def __init__(self, source_dir, categories):
        self.source_dir = source_dir
        self.categories = categories
        self.image_files = [f for f in os.listdir(source_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png')) and os.path.isfile(os.path.join(source_dir, f))]
        self.current_index = 0
        
        # Create category directories if they don't exist
        for category in categories:
            os.makedirs(os.path.join(source_dir, category), exist_ok=True)
        
        self.setup_ui()
        
    def setup_ui(self):
        self.root = tk.Tk()
        self.root.title("Image Organizer")
        self.root.geometry("1200x800")
        
        # Image display
        self.image_frame = ttk.Frame(self.root)
        self.image_frame.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)
        
        self.image_label = ttk.Label(self.image_frame)
        self.image_label.pack(fill=tk.BOTH, expand=True)
        
        # Filename display and edit
        self.filename_frame = ttk.Frame(self.root)
        self.filename_frame.pack(fill=tk.X, padx=10, pady=5)
        
        ttk.Label(self.filename_frame, text="New filename (without extension):").pack(side=tk.LEFT, padx=5)
        self.filename_var = tk.StringVar()
        self.filename_entry = ttk.Entry(self.filename_frame, textvariable=self.filename_var, width=50)
        self.filename_entry.pack(side=tk.LEFT, padx=5, fill=tk.X, expand=True)
        
        # Category buttons
        self.category_frame = ttk.Frame(self.root)
        self.category_frame.pack(fill=tk.X, padx=10, pady=10)
        
        for category in self.categories:
            btn = ttk.Button(self.category_frame, text=category, 
                            command=lambda cat=category: self.categorize_image(cat))
            btn.pack(side=tk.LEFT, padx=5, pady=5)
        
        # Navigation buttons
        self.nav_frame = ttk.Frame(self.root)
        self.nav_frame.pack(fill=tk.X, padx=10, pady=10)
        
        self.prev_btn = ttk.Button(self.nav_frame, text="Previous", command=self.prev_image)
        self.prev_btn.pack(side=tk.LEFT, padx=5)
        
        self.next_btn = ttk.Button(self.nav_frame, text="Next", command=self.next_image)
        self.next_btn.pack(side=tk.LEFT, padx=5)
        
        self.skip_btn = ttk.Button(self.nav_frame, text="Skip", command=self.next_image)
        self.skip_btn.pack(side=tk.LEFT, padx=5)
        
        # Progress indicator
        self.progress_var = tk.StringVar()
        ttk.Label(self.nav_frame, textvariable=self.progress_var).pack(side=tk.RIGHT, padx=5)
        
        # Load first image
        if self.image_files:
            self.load_current_image()
        else:
            self.show_no_images()
    
    def load_current_image(self):
        if 0 <= self.current_index < len(self.image_files):
            current_file = self.image_files[self.current_index]
            image_path = os.path.join(self.source_dir, current_file)
            
            # Set default new filename (without extension)
            base_name = os.path.splitext(current_file)[0]
            self.filename_var.set(base_name.replace("WhatsApp Image ", "").replace("IMG_", ""))
            
            # Update progress indicator
            self.progress_var.set(f"Image {self.current_index + 1} of {len(self.image_files)}")
            
            # Load and display image
            try:
                img = Image.open(image_path)
                # Resize to fit the window while maintaining aspect ratio
                img.thumbnail((1100, 600))
                photo = ImageTk.PhotoImage(img)
                self.image_label.config(image=photo)
                self.image_label.image = photo  # Keep a reference
                self.root.title(f"Image Organizer - {current_file}")
            except Exception as e:
                self.image_label.config(text=f"Error loading image: {e}")
    
    def show_no_images(self):
        self.image_label.config(text="No images found in the directory")
        self.progress_var.set("No images")
    
    def categorize_image(self, category):
        if 0 <= self.current_index < len(self.image_files):
            current_file = self.image_files[self.current_index]
            source_path = os.path.join(self.source_dir, current_file)
            
            # Get new filename from entry
            new_name = self.filename_var.get().strip()
            if not new_name:
                new_name = os.path.splitext(current_file)[0]
            
            # Add extension from original file
            ext = os.path.splitext(current_file)[1]
            new_filename = f"{new_name}{ext}"
            
            # Move and rename file
            dest_path = os.path.join(self.source_dir, category, new_filename)
            
            # Handle filename conflicts
            counter = 1
            while os.path.exists(dest_path):
                new_filename = f"{new_name}_{counter}{ext}"
                dest_path = os.path.join(self.source_dir, category, new_filename)
                counter += 1
            
            try:
                shutil.move(source_path, dest_path)
                print(f"Moved '{current_file}' to '{category}/{new_filename}'")
                
                # Remove from list and load next image
                self.image_files.pop(self.current_index)
                if self.image_files:
                    if self.current_index >= len(self.image_files):
                        self.current_index = len(self.image_files) - 1
                    self.load_current_image()
                else:
                    self.show_no_images()
            except Exception as e:
                print(f"Error moving file: {e}")
    
    def next_image(self):
        if self.image_files and self.current_index < len(self.image_files) - 1:
            self.current_index += 1
            self.load_current_image()
    
    def prev_image(self):
        if self.image_files and self.current_index > 0:
            self.current_index -= 1
            self.load_current_image()
    
    def run(self):
        self.root.mainloop()

if __name__ == "__main__":
    source_directory = sys.argv[1] if len(sys.argv) > 1 else "/Users/ivanboyko/ilbuco/public/i"
    categories = ["rooms", "terraces", "house-exterior", "dining", "kitchen", "bathroom", "pool", "garden"]
    
    organizer = ImageOrganizer(source_directory, categories)
    organizer.run()
