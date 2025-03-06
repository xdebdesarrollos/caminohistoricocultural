import {createContext, useState, useEffect} from 'react';
//import {tasks as data} from '../data/task';

export const TaskContext = createContext();
export default function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
          title:task.title,
          id: tasks.length,
          description:task.description,
          status:"pendiente"
        }]);
      }

      function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id!== taskId));
      }

      useEffect(() => {
        setTasks(data);
      }, [])
    
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask,
 
        }}>
        {props.children}
        </TaskContext.Provider>
        )
}
