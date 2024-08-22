import React, { useState } from 'react'

export default function TextForms(props) {


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);
    }

    const clearScreen=()=>{
        setText("");
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }


    const [text, setText] = useState("Enter text here");

    return (
        <>
            <div className="mb-3 my-4">
                <label for="exampleFormControlTextarea1" className="form-label fw-semibold fs-2">Write the text here....</label>
                <textarea className="form-control border border-dark bg-secondary bg-gradient text-light" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <br />
            <button className="btn btn-primary my-1" onClick={handleDownClick}>Convert to LowerCase</button>
            <br />
            <button className="btn btn-primary" onClick={clearScreen}>Clear Text</button>

        
        </>
    );
}
