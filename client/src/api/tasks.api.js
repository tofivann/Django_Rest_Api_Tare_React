import axios from 'axios'


// creamos una variable o instancia  con la direccion del backen para no ponerla de cada rato
const tasksApi = axios.create({ baseURL:'http://localhost:8000/tasks/api/v1/tasks/'})

export const getAllTasks = () => {
return axios.get('http://localhost:8000/tasks/api/v1/tasks/')

}
// para enviar los datos al back 
export const getTask =(id) => tasksApi.get(`/${id}`) //escrito mas resumido 

export const createTask = (task) =>{

    return tasksApi.post('/', task)
}
// export const createTask =(task) => tasksApi.post('/', task) //escrito mas resumido 
export const deleteTask =(id) => tasksApi.delete(`/${id}/`) //escrito mas resumido 
export const updateTask =(id, task) => tasksApi.put(`/${id}/`, task)