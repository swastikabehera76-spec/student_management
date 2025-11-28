import json
import database
from utils.responses import send_json, send_404

def parse_body (handler):
    length = int(handler.headers.get("Content-Length", 0))
    raw = handler.rfile.read(length)
    return json.loads(raw.decode("utf-8"))

def get_all_students(handler):
    students = database.get_all_students()
    return send_json(handler, 200, students)