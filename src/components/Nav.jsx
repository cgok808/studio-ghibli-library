import React from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import Library from "../assets/Library.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className='nav__container'>
        <Link to=''>
          <img src={Library} className="logo"/>
        </Link>
        <ul className='nav__links'>
          <li className='nav__list'>
            <Link to='/' className='nav__link'>
              Home
            </Link>
          </li>
          <li className='nav__list'>
            <Link to='/books' className='nav__link'>
              Books
            </Link>
          </li>
          <button className='btn__menu'>
            <FaBars className="bars__icon" />
          </button>
          <li className='nav__icon'>
            <Link to='/cart' className='nav__link'>
              <FaShoppingCart className="cart__icon" />
            </Link>
          </li>
        </ul>
        <div className='menu__backdrop'>
          <button className='btn__menu btn__menu--close'>
            <FaTimes />
          </button>
          <ul className='menu__links'>
            <li className='menu__list'>
              <Link to='/' className='menu__link'>
                Home
              </Link>
            </li>
            <li className='menu__list'>
              <Link to='/' className='menu__link'>
                Books
              </Link>
            </li>
            <li className='menu__list'>
              <Link to='/' className='menu__link'>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
