import React from 'react'
import { ImCross } from 'react-icons/im';

function DisTask({ taskList, remove, update }) {
    let i = 0;
    function handleCheck(e) {
        if (e.target.checked) {
            e.target.parentNode.childNodes[1].className = 'checkedLabel';
        }
        else {
            e.target.parentNode.childNodes[1].className = '';
        }

        update(taskList.map((task) => {
            if (task.name === e.target.parentNode.childNodes[0].value) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    }

    return (
        <div >
            {taskList.map((task) => {
                return (
                    <div className='todo' key={i++}>
                        <div className='todo-title'>
                            <input type='checkbox' value={task.name} id={task.name} onChange={(e) => handleCheck(e)} checked={task.completed ? true : false} ></input>
                            <label htmlFor={task.name} className={task.completed ? 'checkedLabel' : ''} >{task.name}</label>
                        </div>
                        <div className='cross-btn' onClick={(e) => remove(task.name)}><ImCross /></div>
                        {/* <button onClick={(e) => remove(task)}>Remove</button> */}
                    </div>
                );
            })}
        </div>
    );
}

export default DisTask;