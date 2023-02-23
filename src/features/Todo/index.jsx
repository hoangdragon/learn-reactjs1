import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const inittodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'code',
            status: 'completed',
        },
        {
            id: 3,
            title: 'sleep',
            status: 'new',
        },
    ];


    const [todoList, setTodoList] = useState(inittodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];
        // toggle state
        console.log(todo, idx);
        
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',

        };
        //update todoList
        setTodoList(newTodoList); 
    }

    const handlerShowAll = () =>{
        setFilterStatus('all');
    }
    const handlerShowCompleted = () => {
        setFilterStatus('completed');
    }
    const handlerShowNew = () => {
        setFilterStatus('new');
    }
    const renderedTotoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    console.log(renderedTotoList);


    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={renderedTotoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handlerShowAll}> Show All</button>
                <button onClick={handlerShowCompleted}> Show Completed</button>
                <button onClick={handlerShowNew}> Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;