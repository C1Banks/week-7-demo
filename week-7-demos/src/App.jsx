import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListItem from './component/ListItem'

function App() {

  const data = [{
    title: "have lunch",
    description: "lunch",
    time: "now"
  },{
    title: "got to bootcamp",
    description: "learning with cohort",
    time: "8:30 AM"
  }

]

  return(
    <div>
      <ol>
        {/*<ListItem taskName = "have Lunch" description = "Lunch" time = "1pm"/>
        <ListItem taskName = "Start Work" description = "Work" time = "8AM"/>
  */}
  {
      data.map((task) => (
        <ListItem 
          taskName = {task.title}
          description = {task.description}
          time = {task.time}
        />
      ))
    }
      </ol>
    </div>
  )
}

export default App
