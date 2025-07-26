
import { useEffect , useState} from "react";

import { getAllTasks } from "../api/tasks.api";
import { TasksCard } from "./TasksCard";


export function TasksList() {
    const [tasks , setTasks] = useState([]);

    useEffect(()=>{
         async function loadTasks(){
            const res = await getAllTasks();

            //console.log(res); res guarda  todo  
            //para que res solo guarde  data usamos res.data
            setTasks(res.data)
        }


        loadTasks();
    },[]);

  return <div>
      { tasks.map(tasks =>( 
        <TasksCard key={tasks.id} tasks={tasks}/>
      ))
    
    
    }
    </div>
  
}
