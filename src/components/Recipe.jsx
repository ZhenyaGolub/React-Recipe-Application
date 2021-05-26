import React from 'react'

export const Recipe = ({ deleteButton, addButton, bookItem, bookLink }) => {

    return (
        <div className={bookItem ? "recipes__item book-item" : "recipes__item"}>
                    {
                       deleteButton && <div className="delete-recipe-button">
                                            <i className="fas fa-trash-alt"></i>
                                       </div> 
                    }
                    <div className="recipes__item-img">
                        <img src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg" alt="1"/>
                    </div>
                    <div className="recipes__item-content">
                        <div className="recipes__item-label">Chicken Vesuvio</div>
                        <div className="recipes__item-types">
                            <span className="type">italian</span>
                            <span className="type">lunch/dinner</span>
                            <span className="type">main course</span>
                        </div>
                        <div className="recipes__item-parameters">
                            <div className="recipes__item-parameters-ingredients">
                                <div className="count">
                                    <i className="fas fa-carrot"></i>
                                    <span>11</span>
                                </div>
                                <div className="parameter">Ingredients</div>
                            </div>
                            <div className="recipes__item-parameters-yields">
                                <div className="count">
                                    <i className="fas fa-utensils"></i>
                                    <span>4</span>
                                </div>
                                <div className="parameter">Portions</div>
                            </div>
                            <div className="recipes__item-parameters-calories">
                                <div className="count">
                                    <i className="fas fa-burn"></i>
                                    <span>1000</span>
                                </div>
                                <div className="parameter">Calories</div>
                            </div>
                        </div>
                        <div className={bookLink ? "recipes__item-recipe-link book-link" : "recipes__item-recipe-link"}>
                            {
                                addButton && <div className="recipes__item-recipe-link-item">
                                                <button className="add-button">Add to the recipe book</button>
                                             </div>
                            }
                            <div className="recipes__item-recipe-link-item">
                                <i className="fas fa-arrow-circle-right link"></i>
                            </div>
                        </div>
                    </div> 
                </div>
    )
}
