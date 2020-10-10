/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Header() {
    return (
        <header id="header">
            <div className="logohead">
                <img src="images/logo.png" alt="" width="150" />
            </div>	
            <h1 className="text-center">Click</h1>
            <p className="text-center">Just another Responsive Site by <a href="http://themewagon.com">Themewagon</a></p>
            <ul className="icons text-center">
                <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-flickr"><span className="label">Flickr</span></a></li>
                <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
            </ul>
        </header>
    )
}

export default Header
