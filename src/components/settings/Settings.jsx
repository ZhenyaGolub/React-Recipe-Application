import React from 'react'
import { settingsModel } from '../../utils/settings.model'
import { IngredientsRange } from './IngredientsRange'

export const Settings = () => {
    return (
        <div className="settings__popup">
        <div className="settings__popup-body">
            <div className="settings__popup-close">
                <i className="far fa-times-circle close-button"></i>
            </div>
            <div className="settings__popup-calories">
                <h3 className="settings__popup-title">Calories</h3>
                <div className="settings__popup-calories-wrapper">
                <div className="calories-input">
                <label htmlFor="min-calories">Min</label>
                <input type="number" id="min-calories" min="0"/>
                </div>
                <div className="calories-input">
                <label htmlFor="max-calories">Max</label>
                <input type="number" id="max-calories" max="10000"/>
                </div>
                </div>
                
            </div>
            <IngredientsRange/>
            <div className="settings__popup-category">
                <h3 className="settings__popup-title">Diet</h3>
                <div className="settings__popup-category-checkboxes">
                    {
                        settingsModel.diet.map(diet => {
                            return (
                                <div className="category-checkbox" key={diet}>
                                    <input type="checkbox" id={diet}/>
                                    <label className="label" htmlFor={diet}>{diet}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="settings__popup-category">
                <h3 className="settings__popup-title">Health</h3>
                <div className="settings__popup-category-checkboxes">
                    {
                        settingsModel.health.map(health => {
                            return (
                                <div className="category-checkbox" key={health}>
                                    <input type="checkbox" id={health}/>
                                    <label className="label" htmlFor={health}>{health}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="settings__popup-category">
                <h3 className="settings__popup-title">Cuisine type</h3>
                <div className="settings__popup-category-checkboxes">
                    {
                        settingsModel.cuisine.map(cuisine => {
                            return (
                                <div className="category-checkbox" key={cuisine}>
                                    <input type="checkbox" id={cuisine}/>
                                    <label className="label" htmlFor={cuisine}>{cuisine}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="settings__popup-category">
                <h3 className="settings__popup-title">Dish type</h3>
                <div className="settings__popup-category-checkboxes">
                    {
                        settingsModel.dish.map(dish => {
                            return (
                                <div className="category-checkbox" key={dish}>
                                    <input type="checkbox" id={dish}/>
                                    <label className="label" htmlFor={dish}>{dish}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="settings__popup-category">
                <h3 className="settings__popup-title">Meal type</h3>
                <div className="settings__popup-category-checkboxes">
                         {
                             settingsModel.meal.map(meal => {
                                return (
                                    <div className="category-checkbox" key={meal}>
                                        <input type="radio" name="meal" id={meal}/>
                                        <label className="label" htmlFor={meal}>{meal}</label>
                                    </div>
                                )
                             })
                         }
                </div>
            </div>
            <div className="settings__popup-set-button">
                <button className="set-button"><i className="fas fa-wrench"></i>Set</button>
            </div>
        </div>
        </div>
    )
}
