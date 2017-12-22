import React from 'react';
import {view as Todos} from './todos';
import {view as Filter} from './filter';

import './style/style.css';

export default ()=>{
    return(
        <div className="todoApp">
            <Todos />
            <Filter />
        </div>
    )
};