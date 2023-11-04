import { useState } from 'react';
import AddTask from './components/AddTask';
import DisTask from './components/DisTask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [taskList, setTaskList] = useState(() => localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : []);
    function add(txt) {
        setTaskList((prevState) => {
            localStorage.setItem('taskList', JSON.stringify([...prevState, txt]));
            return [...prevState, txt];
        })
    }
    function update(newState) {
        localStorage.setItem('taskList', JSON.stringify(newState));
        setTaskList((prevState) => {
            return newState;
        })
    }
    function remove(removeTxt) {
        const temp = taskList.filter((txt) => txt.name !== removeTxt)
        setTaskList(temp);
        localStorage.setItem('taskList', JSON.stringify(temp));
    }
    return (
        <div className='container'>
            <h1 className='main__title'>Todo List</h1>
            <ToastContainer />
            <AddTask add={add} taskList={taskList} />
            <DisTask taskList={taskList} remove={remove} update={update} />
        </div>
    );
}

export default App;