
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, updateTask } from "../api/tasks.api";// llaamo el la funcion en la api
import { deleteTask , getTask} from "../api/tasks.api";
import {useNavigate, useParams} from "react-router-dom" //  esta  funcion  nos permite  navegar  a la pagina de nuevo 

export function TasksFormPage() {

  //permite registar las  estradas
  const {register, handleSubmit, formState: {errors} , setValue} = useForm()


  const navigate = useNavigate()
  const params =useParams()

  //  esto esta registrando la data  y redirige a la pagina principal 
  const onSubmit = handleSubmit( async data => {

    if(params.id){
      //console.log(data)
      await updateTask(params.id, data)
    }else {
      await createTask(data)
    }
     navigate("/tasks")

  })

  useEffect(()=> { 
    async function loadTask() {
    
    if(params.id){
 
      const res=  await getTask(params.id);
      
      setValue("title", res.data.title)
      setValue("descripcion", res.data.descripcion)

    }
  }
      loadTask();

    }, [])

  return (
    <div>
      <form onSubmit={onSubmit} >

        <input type="text" placeholder="title" {...register("title", {required: true})} />
        {errors.title && <span>this field is required</span>}
        <textarea rows="3" placeholder="Descripcion"  {...register("descripcion", {required: true})} ></textarea>
        {errors.descripcion && <span>this field is required</span>}

        <button>Save</button>
      </form>

      {params.id && <button onClick={async ()=> { 
        const accepted = window.confirm("estas seguro de eliminar")

        if(accepted){

          await deleteTask(params.id)
          navigate("/tasks")
        }
      }
        
        
        }>delete</button>}


    </div>
  )
}

