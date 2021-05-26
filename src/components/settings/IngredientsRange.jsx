import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'

export const IngredientsRange = () => {
    
    const [ingredients, setIngredients] = useState(5);

    const changeIngredients = (event, newValue) => {
        setIngredients(newValue);
    }

    function valuetext(value) {
        return `${value}`;
    }

    return (
        <div className="settings__popup-ingredients">
                <h3 className="settings__popup-title">Maximum amount of ingredients</h3>
                <Slider
                defaultValue={5}
                min={5}
                max={20}
                onChange={changeIngredients}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={1}
                valueLabelDisplay="auto"
                />
        </div>
    )
}
