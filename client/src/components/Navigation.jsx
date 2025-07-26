import {Link} from 'react-router-dom'


export function Navigation() {
  return (
    <div>
        <Link to ="/tasks"><h1>Tasks APP</h1></Link>
      
        <Link to="/tasks-create">Create Tasks</Link> 

    </div>
  )

}