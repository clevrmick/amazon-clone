import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon-logo"/>
            </div>
            <div className="header__search">
                <input className="header__searchInpute" type="text"/>
                {/* logo */}
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">& Your</span>
                    <span className="header__optionLineTwo">& Prime</span>
                </div>
            </div>
            
        </div>
    )
}

export default Header
