import React from 'react';
import {view as Todos} from './todos';
import {view as Filter} from './filter';
import AppTitle from './common/appTitle'

import './style/index.css';

export default ()=>{
    return(
        <div className="todoApp">
            <AppTitle />
            <Todos />
            <Filter />
        </div>
    )
};