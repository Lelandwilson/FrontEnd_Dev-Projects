import React from 'react';

const Header = () =>{
    return(
        <div className="Header">
            <img id="Hero_photo" src="./headshot_317.jpg" />
            <div>
                <h1>Leland Wilson</h1>
                <p className='subtitle'>Front End Developer</p>
                <p className='normalText'>website.website.com</p>
            </div>
            <div className='dualButtons'>
                <a href= "mailto:leland.wilson@bigpond.com">
                    <button type='button' id='But1'><img src="./emailIcon.png"/>Email</button>
                </a>
                <a href= "https://www.linkedin.com/in/leland-wilson-a2948993">
                    <button type='button' id='But2' ><img src="./linkedInIcon.png" /> LinkedIn</button>
                </a>
            </div>

        </div>
    );   
};

export default Header;