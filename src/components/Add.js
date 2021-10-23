import React from 'react'
import { useState } from 'react'

const Add = ( {onadd} ) => {

    const [text,setText] = useState('')
    const [day,setday] = useState('')
    const [reminder,setreminder] = useState('')

const onsubmit = (e) =>{
    e.preventDefault()
    if(!text){
        alert('add task')
        return
    }
onadd({text,day,reminder})
setText('')
setday('')
setreminder(false)
}
    return (
        <form className='add-form' onSubmit={onsubmit}>
            <div className='form-control'>
                 <label>task </label>
                <input type='text' placeholder='addtask'
                value={text} onChange={(e)=> setText(
                    e.target.value)
                }
                />
            </div>
            <div className='form-control'>
                 <label> day and time </label>
                <input type='text' placeholder='add day and time'
                value={day} onChange={(e)=> setday(
                    e.target.value)}
                />
            </div>
            <div className='form-control form-control-check' >
                 <label>set reminder</label>
                <input type='checkbox'checked={reminder } value={reminder} onChange={(e)=> setreminder(
                    e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='save task'className='btn btn-block '></input>
            




        </form>
    )
}

export default Add
