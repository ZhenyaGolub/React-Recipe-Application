import React from 'react'
import { Recipe } from './Recipe'

export const Recipes = () => {
    return (
        <main className="recipes">
        <div className="container">
            <div className="recipes__total-amount">
                <span>Total amount of recipes: 7000</span>
            </div>
            <div className="recipes__inner">
                <Recipe deleteButton={false} addButton={true} bookItem={false} bookLink={false}/>
                <div className="recipes__show-more-wrapper">
                    <button className="show-more-button">Show more</button>
                </div>
            </div>
        </div>
    </main>
    )
}
