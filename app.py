from http.server import HTTPServer
from router import StudentRouter

def run_server(port=8000):
    server = HTTPServer(("", port), StudentRouter)
    print(f"🚀 server running at http://localhost:{port}")
    server.serve_forever()
    
if __name__ == "__main__":
    run_server()
