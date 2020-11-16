import React from 'react';
import './Cards.css';
import Cardsitem from './Cardsitem';

function Cards() {
    return (
        <div className="cards">
            <h1>Checkout the Epic Movies</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Cardsitem src='/Pictures/marvel/civilwar.jpg' text="Civil War Captain America" label="MARVEL" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
