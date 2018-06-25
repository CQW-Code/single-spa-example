import React from 'react';
import {navigateToURL} from 'single-spa';


const NavBar = () => (
      <nav>
        <div className="nav-wrapper">
          <a onClick={()=> navigateToUrl('/')}
          className="brand-logo">single-spa</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a onClick= {() => navigateToUrl("/")}>Home</a></li>
            <li><a onClick= {() => navigateToUrl("/angular1")}>Angular1</a></li>      
          </ul>
        </div>
      </nav>
    )


export default NavBar