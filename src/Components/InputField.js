import React from 'react';
import ReactDOM from 'react-dom';

function InputField (props) {
    

    return (
        <div>
            <label className="input-label">
                Guess the Pokemon:
                <input 
                    name='guess'
                    className="input-textBox"
                    type="text"
                    value={props.guess}
                    onChange={props.handleChange}
                />
            </label>
        </div>
    )
}

export default InputField;