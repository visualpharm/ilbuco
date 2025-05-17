from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class NoCacheHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # The 'public' directory contains the website files
        public_dir = os.path.join(os.getcwd(), "public")
        super().__init__(*args, directory=public_dir, **kwargs)
    
    def end_headers(self):
        # Add headers to prevent caching
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    server_address = ('', 3000)
    httpd = HTTPServer(server_address, NoCacheHandler)
    print("Server running at http://localhost:3000")
    httpd.serve_forever()
