import React from 'react';
import { Row, Col } from 'antd';

import Link from './link.js';
import {FilterTypes} from '../../constants.js';
import TotalCount from '../../common/totalCount'

const Filter = () => {
    return (
            <div className="todo-filter">
                <Row gutter={16}>
                    <Col className="gutter-row" span={21}>
                        <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
                        <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
                        <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <TotalCount/>
                    </Col>
                </Row>
            </div>
    )
};

export default Filter;