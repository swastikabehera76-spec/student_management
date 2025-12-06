import {
    apiGetAll
} from "../servivrs/studentService.js";
import { renderStudentTable } from "../components/StudentTable.js";
import { resetForm, fileForm } from "../components/StudentTable.js";

import { setState, getStat} from "../state/store.js";
import { $, createElement } from "../utils/dom.js";
export function initStudentController() {
    loadStudent();
    $("studentForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      name: $("name").value.trim(),   
      email: $("email").value.trim(), 
      course: $("course").value.trim(), 
      year: $("year").value.trim()    
    };

    
    const { editingId } = getState();
    editingId
      ? await updateStudent(editingId, data) 
      : await createNewStudent(data);        
  });

  $("cancelBtn").addEventListener("click", () => {
    setState({ editingId: null });
    resetForm();
  });
}
export async function loadStudents() {
  const spinner = $("loadingSpinner");
  const table = $("studentsTableContainer");

  spinner.style.display = "block";
  table.style.display = "none";

  const students = await apiGetAll();

  setState({ students });
  renderStudentTable(students);

  spinner.style.display = "none";
  table.style.display = "block";
}
