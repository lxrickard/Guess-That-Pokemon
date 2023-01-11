import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function InputField () {
    const [guess, setGuess] = useState('')
    const handleChange = (event) => {
        setGuess(event.target.value);
    }

    return (
        <div>
            <label className="input-label">
                Guess the Pokemon:
                <input 
                    className="input-textBox"
                    type="text"
                    value={guess}
                    onChange={handleChange}
                />
            </label>
        </div>
    )
}

export default InputField;