import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';

const Routerfile = () => {
    return (
        <div>
            
            <Routes>
                <Route path='/' element = {<Sidebar/>}  />
            </Routes>

        </div>
    );
};

export default Routerfile;