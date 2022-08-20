import React, { Component } from 'react';
import "./Home.css";

export default class Home extends Component {

    toogle = () => {
        const toggler = document.querySelector('.navbar-toggler');
        const collapse = document.querySelector('.collapse');
        collapse.classList.toggle('show')
        toggler.classList.toggle('collapsed')
    };

    render() {
        return (
            <div className="home">
                <div className='someText'>
                    <strong >Welcome</strong>
                </div>
            </div>
        )
    }

}

