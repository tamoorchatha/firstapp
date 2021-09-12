import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('Upper case was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case","success");
    }
    const handleLoClick = ()=>{
        // console.log('Upper case was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text area cleared","success");
    }
    const handleToCopy = ()=>{
        var newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText (newText.join(" "));
        props.showAlert("Extra spaces are removed","success");
    }
    const handleOnChange = (event)=>{
        // console.log('on change');
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    //text = 'new text'; wrong way to change the state
    //setText('new text');//correct way to change the state

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleToCopy}>copy</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter  the something in the textBox above to preview it"}</p>
        </div>
        </>
    )
}
