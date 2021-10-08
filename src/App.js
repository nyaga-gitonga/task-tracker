import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

const [showAddTask,setShowAddTask]=useState(true)
 
const [tasks,setTasks]=useState([
  {
    id:1,
    text:'Complete the poa street KPIs',
    day:'October 7th at 7.00am',
    reminder:true
},
{
    id:2,
    text:'Read the Es6 notes',
    day:'October 8th at 6.00am',
    reminder:true
},
{
    id:3,
    text:'Complete the Travesy tutorial',
    day:'October 9th at 8.00am',
    reminder:false
}
 ])

 //Add Task
 const addTask= (task) => {
   const id=Math.floor(Math.random() * 1000) + 1
   const newTask ={id, ...task}
   setTasks([...tasks,newTask])
 }
 //delete task
const deleteTask= (id) =>{
setTasks(tasks.filter((task) => task.id !==id))
}

//toggle reminder
const toggleReminder = (id) =>{
  setTasks(
    tasks.map((task) => task.id === id? {...task, reminder : !task.reminder } : task
    )
    )
}


  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask) } 
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?   <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
   : 'No Tasks To Show'}

     </div>
  );
}

export default App;
