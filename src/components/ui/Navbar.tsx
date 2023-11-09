import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <header className='navbar-header'>
      <nav>
        <div>
          <ul className='menu'>
            <li className='logo'>
              <NavLink className='page-title' to='/'>
                <span>
                  <i className='fa-solid fa-cars'></i>
                </span>{' '}
                Westcoast Cars
              </NavLink>
            </li>
            <li className='toggle'>
              <input className='menu-btn' type='checkbox' id='menu-btn' />
              <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
              </label>
            </li>
            <li className='menu-item'>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>
                Start
              </NavLink>
            </li>
            <li className='menu-item'>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/about'>
                Om Oss
              </NavLink>
            </li>
            <li className='menu-item'>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/contact'>
                Kontakta Oss
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
