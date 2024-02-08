import React, { useState } from 'react';

const Test = () => {
 const [navbarOpen, setNavbarOpen] = useState(false);

 const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
 };

 const navbar = [
    { name: 'Home', link: '/' },
    {
      name: 'Dropdown',
      link: '#',
      dropdown: [
        { name: 'Sub Item 1', link: '/subitem1' },
        { name: 'Sub Item 2', link: '/subitem2' },
      ],
    },
 ];

 const onMouseEnter = () => {
    setNavbarOpen(true);
 };

 const onMouseLeave = () => {
    setNavbarOpen(false);
 };

 return (
    <header>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-brand'>
            <a href='/'>Brand</a>
          </div>

          <div className='navbar-menu'>
            {navbar.map((item, index) => (
              <div
                key={index}
                className='navbar-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <a href={item.link}>{item.name}</a>
                {item.dropdown && (
                 <div
                    className={
                      'navbar-dropdown ' +
                      (navbarOpen ? 'navbar-dropdown-show' : '')
                    }
                 >
                    {item.dropdown.map((subItem, subIndex) => (
                      <a key={subIndex} href={subItem.link}>
                        {subItem.name}
                      </a>
                    ))}
                 </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
 );
};

export default Test;