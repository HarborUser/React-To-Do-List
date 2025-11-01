
import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react';
function ToDoList(){

    const [tasks, setTasks] = useState(["Eat BreakFast","Take a Showever", "Walk a dog"]);
    const [newTask, setNewTask] = useState("");


     const [pendingTasks, setPendingTasks] = useState(["Eat BreakFast","Take a Showever", "Walk a dog"]);
    const [newPendingTask, setNewPendingTaks] = useState("");


    function handleInputChange(event){
        setNewTask(event.target.value)
        console.log(tasks)
    }
    function addTask(){
        
        if(newTask.trim() !== ""){
            setTasks(previousTask => [...previousTask,newTask]);
            setNewTask("")
        }
    
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index)
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){


    if(index > 0){
        const finalTasks = [...tasks];
      [finalTasks [index],finalTasks[index-1]] =[ finalTasks[index-1],finalTasks[index]]
         setTasks(finalTasks);
    }
   


    }
    function moveTaskDown(index){
            if(index < tasks.length -1){
        const finalTasks = [...tasks];
      [finalTasks [index],finalTasks[index+1]] = [finalTasks[index+1],finalTasks[index]]
         setTasks(finalTasks);
    }
   

    }
    return (
     <div className="to-do-list">
        <h1>Personal Kanban Board</h1>
     

        <div className='grid'>
            <button className='test' >To Do</button>
            <button className='In-progress-button'>In Progress</button>
            <button className='done-button'>Done</button>  
            <div>
                <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>
                        <div>
                <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            
            </div>

            
                        <div>
                <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            
            </div>
          <div className='to-do'>
            <ol >
       
            {tasks.map((task,index)=>
                <li key={index} >
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                </li>
            )}
        </ol>

        </div>

            <div className='to-do'>
            <ol >
       
            {tasks.map((task,index)=>
                <li key={index} >
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                </li>
            )}
        </ol>

        </div>

              <div className='to-do'>
            <ol >
       
            {tasks.map((task,index)=>
                <li key={index} >
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                </li>
            )}
        </ol>

        </div>

        </div>

              {/* <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
            />
            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button> */}

      
        {/* <div className='to-do'>
            <ol >
       
            {tasks.map((task,index)=>
                <li key={index} >
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                </li>
            )}
        </ol>

        </div> */}

          
        
        

    </div>)
}
export default ToDoList