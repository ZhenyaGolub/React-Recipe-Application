import React from 'react'

export const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="header__inner">
                <i className="fas fa-hamburger mobile-logo"></i>
                <h1 className="header__logo">React Recipes</h1>
                <div className="header__search">
                    <form className="header__form">
                        <input type="text" className="header__input"/>
                        <button type="submit" className="header__search-button"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="header__settings">
                    <i className="fas fa-cog"></i>
                </div>
                <div className="header__recipe-book">
                    <i className="fas fa-book"></i>
                </div>
            </div>
        </div>
    </header>
    )
}