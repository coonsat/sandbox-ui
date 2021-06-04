import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    return(
        <div>
            <NavLink to='/'>Buttons</NavLink>
            <NavLink to='/calendar'>Calendar</NavLink>
            <NavLink to='/sliders'>Sliders</NavLink>
        </div>
    );

};

export default Sidebar;