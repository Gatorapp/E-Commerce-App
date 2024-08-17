import React from "react";
import Undrawbooks from '../assets/Undraw_Books.svg'
import { Link } from "react-router-dom";
const Landing = ()=> {
    return (
        <section id="Landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>America's most awarded online library platform</h1>
                        <h2>Find your dream book with<span className="purple"> library.</span></h2>
                        <Link to="/books">
                        <button className="btn">Browse Books</button>
                        </Link>
                    </div>
                    <figure className="header__img--wraper">
                        <img src= {Undrawbooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;