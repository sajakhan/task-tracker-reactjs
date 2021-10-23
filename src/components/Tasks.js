import Task from './Task'

const Tasks = ({tasks,onDelete,ontoggle}) => {
    return (
        <>
             {tasks.map( (t)=> (
                 <Task key={t.id} t = {t} onDelete={onDelete} ontoggle={ontoggle}/>
                 
             )


             )}
            
        </>
    )
}

export default Tasks
