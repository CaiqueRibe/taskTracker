import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
   //    const handleClick2 = () => {
   //       setTasks([
   //          ...tasks,
   //          {
   //             id: 4,
   //             text: "Food Teste",
   //             day: "Feb 5th at 2:30pm",
   //             reminder: false,
   //          },
   //       ])
   //    }

   return (
      <>
         {tasks.map((task) => (
            <Task
               key={task.id}
               task={task}
               onDelete={onDelete}
               onToggle={onToggle}
            />
         ))}
         {/* <button onClick={handleClick2}>teste</button> */}
      </>
   )
}

export default Tasks
