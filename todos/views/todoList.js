import React, {Component} from 'react';
import {connect} from 'react-redux';

import {toggleTodo,removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';

import TodoListItem from './todoListItem.js'

const TodoList = ({todos,onToggleTodo,onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoListItem key={item.id} text={item.text} completed={item.completed} onToggle={()=>onToggleTodo(item.id)} onRemove={()=>onRemoveTodo(item.id)} />
                ))
            }
        </ul>
    );
};

const selectVisibleTodos = (todos,filter) => {
    switch(filter){
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            throw new Error('unsupported filter');
    }
};

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos,state.filter)
    }
};

const mapDispathToProps = (dispath) => {
    return {
        onToggleTodo: (id) => {
            dispath(toggleTodo(id))
        },
        onRemoveTodo: (id) => {
            dispath(removeTodo(id))
        }
    }
};

export default connect(mapStateToProps,mapDispathToProps)(TodoList);