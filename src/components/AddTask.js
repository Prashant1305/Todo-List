import React, { useState } from 'react'
import { toast } from 'react-toastify';


function AddTask({ add, taskList }) {
    // const taskList=localStorage.getItem(taskList);
    const [inpTask, setTask] = useState();
    function handleTask(e) {
        setTask({ name: e.target.value, completed: false });
    }
    function handleClick(e) {

        e.preventDefault();
        if (e.target.parentNode.childNodes[0].value.length === 0) {
            toast.error('Please Fill Input', { autoClose: 2000 });
        }
        else {
            add(inpTask);
            // e.target.value = ''; // will only clear value
            toast('Successfully added', { autoClose: 1000 });
            document.getElementById('inp').value = '' //  for rendering after clearing value
            setTask('');
        }
    }
    return (
        <form className='todoForm'>
            <input type='text' onChange={handleTask} id='inp' className='todoForm__input' placeholder='Enter Your Task'></input>
            <button onClick={handleClick} className='todoForm__btn' >Add</button>
        </form>
    )
}

export default AddTask