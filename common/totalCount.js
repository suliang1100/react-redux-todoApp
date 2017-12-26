import React from 'react';
import {connect} from 'react-redux'

const TotalCount = ({all,isComplete}) => {
    return (
        <div>{all}/{isComplete}</div>
    );
};

const mapStateToProps = (state) => {
    const isCompleteList = state.todos.filter((item)=>{
        return item.completed
    });
    return {
        all:state.todos.length,
        isComplete:isCompleteList.length
    }
};

export default connect(mapStateToProps)(TotalCount);