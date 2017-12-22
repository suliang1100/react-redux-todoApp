import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

const initState = [{
    id: 0,
    text: "React.js",
    completed: false
},{
    id: 1,
    text: "redux",
    completed: true
},{
    id: 2,
    text: "webpack",
    completed: false
},{
    id: 3,
    text: "ECMAScript 6",
    completed: false
},{
    id: 4,
    text: "Node.js",
    completed: true
},{
    id: 5,
    text: "TypeScript",
    completed: false
}];
export default (state=initState,action) => {
    switch(action.type){
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    completed: action.completed,
                    text:action.text
                },
                ...state
            ]
        }
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed };
                } else {
                    return todoItem;
                }
            })
        }
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id
            })
        }
        default:{
            return state;
        }
    }
}