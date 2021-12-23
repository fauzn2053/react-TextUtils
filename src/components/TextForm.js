import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const convertUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("info", "Converted text to uppercase")
    }
    const convertLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("info", "Converted text to lower case")
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("info", "Cleared input text")
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("info", "Copied input text")
    }
    const removeSpace = () => {
        let newText = text.replace(/[\n\r\s\t]+/g, ' ')
        setText(newText);
        props.showAlert("info", "Removed space from text")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");


    return (
        <div style={{ backgroundColor: props.mode === "dark" ? 'black' : "white", color: props.mode === "dark" ? "white" : "black" }}>
            <div className="container"  >
                <div className='mb-3 my-4'>
                    <h1> {props.heading}</h1>
                    <label htmlFor="mytext"></label>
                    <textarea className="form-control" id="mytext" placeholder='Enter Text value' onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertUppercase}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertLowercase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeSpace}>Remove Space</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>Word {text.split(" ").filter((element)=>{return element.length!==0}).length} and Character {text.length}</p>
                <p> { text.length===0? 0:text.split(" ").length * 0.08} Minutes read</p>
                <h2>Preview</h2>
                <p> {text.length > 0 ? text : "Nothing for review"}</p>
            </div>
        </div>
    )
}
