import { Link } from 'gatsby'
import React from 'react'
import Navbar from './Navbar';
import '../styles/global.css';

export default function Layouts({ children }) {
    return (
        <div className="layouts">
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright 2021 web Warrior</p>
            </footer>         
            
        </div>
    )
}
