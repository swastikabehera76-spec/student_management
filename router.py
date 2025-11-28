class StudentRouter(BaseHTTPRequestHandler):
 def do_GET(self):
        path = urlparse(self.path).path

        # if path in ("/","/index.html"):
        #     return server_html(self)

        # if path.startswitch("/static/"):
        #     return serve_static(self)

        if path == "/api/students":
            return get_all_students(self)

        # if path.startswith("/api/students/"):
        #     student_id = int(path.split("/")[-1])

        #     return get_student(self, student_id)

        return send_404(self)