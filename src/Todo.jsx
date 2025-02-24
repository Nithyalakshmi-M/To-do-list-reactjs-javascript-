import React, { useState } from 'react';

function Todo() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    const[editItem,setEdititem]=useState(null)

function handleChange(event) 
    {
      setNewTask(event.target.value)
    }
 function addtask()
 {
      if(newTask!=="")   
        setTask( [...task,newTask])
        setNewTask("")  
 }
 function deletetask(index)
 {
     const updatedTasks= task.filter((_,i)=>i !== index)
     setTask(updatedTasks)
 }
function handleEdit (index){
 setNewTask(task[index])
  setEdititem(index)
}
function updatetask()
{
    const updateitem=[...task]
    updateitem[editItem]=newTask  // old value replace agum 
    setTask(updateitem)   // athey task array la replace panre 
    setEdititem(null) 
}
function updateoradd()
{
    if(editItem !== null)
    {
        updatetask()
    }
    else{
        addtask()
    }
    setNewTask("")
}
    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>
            <div>
                <input
                    type='text'
                    placeholder='Enter the task...'
                    value={newTask}
                    onChange={handleChange}
                />
                <button className='add-button' 
                onClick={updateoradd} >
                 add ❤️
                </button>

            </div>
            <div>
            <ol>
                {task.map((task,index)=>
                <li key={index}>{task}
                <button   className=' delete-button' onClick={()=>deletetask(index)}>delete task 💔</button>
                <button   className=' edit-button' onClick={()=>handleEdit(index)}>edit task </button>
                </li>)   
            }
              </ol>
            </div>
             
              
              
        </div>
    );
}

export default Todo;
