import React from 'react';
import ReactDOM from 'react-dom';

function InputField (props) {


    return (
        <div>
            <label className="input-label">
                <p>{props.correct === true ? "That is correct!" : props.correct === false ? "Oops, that is incorrect" : "Guess That Pokemon"}</p>
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