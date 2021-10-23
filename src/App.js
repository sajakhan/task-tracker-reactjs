// eslint-disable-next-line 
import Header from './components/Header'
// eslint-disable-next-line 
import Tasks from './components/Tasks'
// eslint-disable-next-line 
import Add from './components/Add'
import { useState } from 'react'
import React from 'react';


function App() {
// eslint-disable-next-line 
  const [showaddtask,setshowaddtask]= useState(true)

  const [tasks,setTasks] = useState()
// addtask
const addtask = (task) => {
  const id = Math.floor(Math.random() * 10000 )+ 1 
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

const togglereminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? {...task, reminder : !task.reminder }
  : task))

  }



  return (
    <div className="App">
      <Header title="Tracker" onadd={() => setshowaddtask(!showaddtask)} />

      { showaddtask && 
      <Add onadd={addtask}/>
      }
     { tasks.length>0 ? 
     <Tasks tasks={tasks} onDelete={deleteTask} ontoggle={togglereminder}/>
     : "no tasks to show"
     }
    </div>
  );
}

export default App;
