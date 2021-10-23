import {FaTimes} from 'react-icons/fa'

const Task = ({t,onDelete,ontoggle}) => {
    return (
        <div className={ `task ${t.reminder ? 'reminder' : ''}` } onDoubleClick={()=> ontoggle(t.id)}>
            <h3>{t.text} <FaTimes style={{color:'red',cursor:'pointer'}}
            
            onClick={() => onDelete(t.id)}/>
            </h3>
            <p>{t.day}</p>
        </div>
    )
}

export default Task
