import React from 'react'

function Header() {
    return (
        <header id="header">
            <div class="logohead">
                <img src="images/logo.png" alt="" width="150" />
            </div>	
            <h1 class="text-center">Click</h1>
            <p class="text-center">Just another Responsive Site by <a href="http://themewagon.com">Themewagon</a></p>
            <ul class="icons text-center">
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
