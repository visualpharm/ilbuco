#!/usr/bin/env python3
import os
import shutil
import sys

def organize_images(source_dir):
    # Create category directories
    categories = ["rooms", "terraces", "house-exterior", "dining", "kitchen", "bathroom", "pool", "garden"]
    for category in categories:
        os.makedirs(os.path.join(source_dir, category), exist_ok=True)
    
    # Get all image files
    image_files = [f for f in os.listdir(source_dir) 
                  if f.lower().endswith(('.jpg', '.jpeg', '.png')) 
                  and os.path.isfile(os.path.join(source_dir, f))]
    
    # Initial categorization based on filenames
    for filename in image_files:
        source_path = os.path.join(source_dir, filename)
        
        # Skip if it's already in a subdirectory
        if '/' in filename:
            continue
        
        # Create a descriptive name based on the original filename
        base_name = os.path.splitext(filename)[0]
        ext = os.path.splitext(filename)[1]
        
        # Default category
        category = "rooms"  # Default category
        
        # Simple heuristic for categorization (can be improved)
        if "IMG_2145" in filename:
            new_name = "house_front_view"
            category = "house-exterior"
        elif "IMG_2148" in filename:
            new_name = "terrace_view"
            category = "terraces"
        elif "17.18.49" in filename:
            new_name = "bedroom_main"
            category = "rooms"
        elif "17.18.50" in filename:
            new_name = "living_room"
            category = "rooms"
        elif "17.18.51" in filename:
            new_name = "dining_area"
            category = "dining"
        elif "17.18.53" in filename:
            new_name = "bathroom_main"
            category = "bathroom"
        elif "17.18.54 (1)" in filename:
            new_name = "kitchen_view"
            category = "kitchen"
        elif "17.18.54" in filename and "(1)" not in filename:
            new_name = "terrace_dining"
            category = "terraces"
        elif "17.19.36" in filename:
            new_name = "garden_view"
            category = "garden"
        elif "17.19.37" in filename:
            new_name = "pool_area"
            category = "pool"
        elif "17.19.38 (1)" in filename:
            new_name = "bedroom_second"
            category = "rooms"
        elif "17.19.38" in filename and "(1)" not in filename:
            new_name = "bathroom_guest"
            category = "bathroom"
        elif "17.19.40" in filename:
            new_name = "terrace_lounge"
            category = "terraces"
        elif "17.19.43" in filename:
            new_name = "house_side_view"
            category = "house-exterior"
        elif "17.19.44 (1)" in filename:
            new_name = "garden_path"
            category = "garden"
        elif "17.19.44" in filename and "(1)" not in filename:
            new_name = "house_back_view"
            category = "house-exterior"
        elif "17.19.46" in filename:
            new_name = "pool_detail"
            category = "pool"
        else:
            # If we can't categorize, create a generic name
            new_name = base_name.replace("WhatsApp Image ", "").replace("IMG_", "image_")
        
        # Create new filename
        new_filename = f"{new_name}{ext}"
        dest_path = os.path.join(source_dir, category, new_filename)
        
        # Handle filename conflicts
        counter = 1
        while os.path.exists(dest_path):
            new_filename = f"{new_name}_{counter}{ext}"
            dest_path = os.path.join(source_dir, category, new_filename)
            counter += 1
        
        # Move and rename file
        try:
            shutil.move(source_path, dest_path)
            print(f"Moved '{filename}' to '{category}/{new_filename}'")
        except Exception as e:
            print(f"Error moving file {filename}: {e}")

if __name__ == "__main__":
    source_directory = sys.argv[1] if len(sys.argv) > 1 else "/Users/ivanboyko/ilbuco/public/i"
    organize_images(source_directory)
    print("Image organization complete!")
