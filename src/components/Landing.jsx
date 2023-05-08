import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id='landing'>
      <header>
        <div className='header__container'>
          <div className='header__description'>
            <h1>America's most awarded library platform</h1>
            <h2>
              Find your dream book <span className='purple'>Library</span>
            </h2>
            <Link to='/books'>
              <button className='btn'>Browse Books</button>
            </Link>
          </div>
          <figure> 
            <img src="" alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
