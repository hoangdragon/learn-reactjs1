import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
};
TodoList.defaultProps ={
    todoList: [],
}

function TodoList({todoList}) {
    return (
        <ul className='test'>
           {todoList.map(todo=>(
                <li key = {todo.id}>{todo.title} </li>
           ))} 
        </ul>
    );
}

export default TodoList;