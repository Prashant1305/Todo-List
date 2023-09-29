import React from 'react'
import { ImCross } from 'react-icons/im';

function DisTask({ taskList, remove }) {
    let i = 0;
    // Normal javascript
    function handleCheck(e) {
        // console.log(e.target.parentNode.childNodes[1].style.textDecoration);
        if (e.target.checked) {
            e.target.parentNode.childNodes[1].style.textDecoration = 'line-through';
            e.target.parentNode.childNodes[1].style.opacity = '0.6';
        }
        else {
            e.target.parentNode.childNodes[1].style.textDecoration = 'none';
            e.target.parentNode.childNodes[1].style.opacity = '1.0';
        }
    }

    return (
        <div >
            {taskList.map((task) => {
                return (
                    <div className='todo' key={i++}>
                        <div className='todo-title'>
                            <input type='checkbox' value={task} id={task} onChange={(e) => handleCheck(e, { task })} ></input>
                            <label htmlFor={task}>{task}</label>
                        </div>
                        <div className='cross-btn' onClick={(e) => remove(task)}><ImCross /></div>
                        {/* <button onClick={(e) => remove(task)}>Remove</button> */}
                    </div>
                );
            })}
        </div>
    );
}

export default DisTask;