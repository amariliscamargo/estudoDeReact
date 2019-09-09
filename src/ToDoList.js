import React from 'react';
import { ToDoListItens } from './ToDoListItens';

export function ToDoList(){
    const TaskItens = [
        {
            id:'1',
            name:'Task 1',
            status:'pending'

        },
        {
            id:'2',
            name:'Task 2',
            status:'pending'

        },
        {
            id:'3',
            name:'Task 3',
            status:'pending'

        }

    ]

    return(
        <ul>
            { TaskItens.map(task => (                 
                 <li key={task.id}> 
                         <ToDoListItens {...task} />
                  </li>             
            ))}
        </ul>
        )

}