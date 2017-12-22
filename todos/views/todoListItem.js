import React from 'react';

import { Row, Col } from 'antd';
import { Checkbox } from 'antd';
import { Icon } from 'antd';

const TodoItem = ({onToggle,onRemove,text,completed}) => {
    return (
        <li className="todo-item">
            <Row gutter={16}>
                <Col className="gutter-row" span={21}>
                    <Checkbox className="todo-toggle" checked={completed} onClick={onToggle}><label className="todo-text" style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</label></Checkbox>
                </Col>
                <Col className="gutter-row" span={3}>
                     <button className="todo-remove" onClick={onRemove}><Icon type="close-circle" /></button>
                </Col>
            </Row>
        </li>
    )
};

export default TodoItem;