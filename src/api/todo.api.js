import axios from "axios";

export const getTodoDataApi = () => {
    return axios.get("http://localhost:3001/todoData");
}

export const postTodoDataApi = (data) => {
    return axios.post("http://localhost:3001/todoData", data);
}

export const deleteTodoDataApi = (id) => {
    return axios.delete("http://localhost:3001/todoData/"+id);
}

export const patchTodoDataApi = (id, obj) => {
    return axios.patch("http://localhost:3001/todoData/"+id, obj);
}