import axios from "axios";

const API_URL = "http://localhost:5000/api/students";

export const addStudent = (data) => axios.post(`${API_URL}/add`, data);
export const getStudents = () => axios.get(`${API_URL}/`);
export const deleteStudent = (id) => axios.delete(`${API_URL}/delete/${id}`);
export const updateStudent = (id, data) => axios.put(`${API_URL}/update/${id}`, data);
