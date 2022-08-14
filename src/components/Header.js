import React, { Component } from 'react'
import logo from "";

const Header = () => {
    return (
        <div className=''>
            <h2 className='' id='headerTop'>
                <img src={logo} id='headerLogo'></img>
                <div className='title'>Memory Game</div>
            </h2>
        </div>
    );
};

export default Header;