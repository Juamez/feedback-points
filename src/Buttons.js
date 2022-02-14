import React from 'react';

const Buttons = ({ eventGood, eventNeutral, eventBad, textG, textN, textB }) => {
    return (
        <div>
            <button onClick={eventGood}>{textG}</button>
            <button onClick={eventNeutral}>{textN}</button>
            <button onClick={eventBad}>{textB}</button>
        </div>
    )
    
}

export default Buttons