import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions.js'

import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';

class AddTodo extends Component {
    constructor(props,context){
        super(props,context);

        this.state = {
            value:''
        };
    }

    inputValueChange(e){
        this.setState({
            value:e.target.value
        })
    }

    onSubmit(){
        const inputValue = this.state.value;

        if(!inputValue.trim()){
            return;
        }

        this.props.onAdd(inputValue);
        this.setState({value:''});
    }

    render(){
        return (
            <Row gutter={16}>
                <Col className="gutter-row" span={19}>
                    <Input placeholder="请输入待办事项" onChange={this.inputValueChange.bind(this)} value={this.state.value} />
                </Col>
                <Col className="gutter-row" span={4}>
                    <Button type="primary" onClick={this.onSubmit.bind(this)}>新增</Button>
                </Col>
            </Row>
        )
    }
}

const mapDispathToProps = (dispath) => {
    return {
        onAdd: (text) => {
            dispath(addTodo(text));
        }
    }
}

export default connect(null,mapDispathToProps)(AddTodo);