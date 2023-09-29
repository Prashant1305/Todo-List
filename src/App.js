import { useState } from 'react';
// import './App.css'
import AddTask from './components/AddTask';
import DisTask from './components/DisTask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [taskList, setTaskList] = useState([]);
    function add(txt) {
        setTaskList((prevState) => {
            return [...prevState, txt];
        })
    }
    function remove(removeTxt) {
        console.log(removeTxt);
        setTaskList(taskList.filter((txt) => txt !== removeTxt))
    }
    return (
        <div className='container'>
            <h1 className='main__title'>Todo List</h1>
            <ToastContainer />
            <AddTask add={add} />
            <DisTask taskList={taskList} remove={remove} />
        </div>
    );
}

export default App;