import React, {useState}from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "Success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "Success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Clear Text!", "Success");
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const[text,setText] = useState('');
    

  return (
    <>
    <div className='container'> 
        <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2'onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2'onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2'onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container" my-3>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and  {text.length} characters</p>
         <p>{0.008 * text.split(" ").length } Minutes read</p>  
         <h2>Preview</h2>
         <p>{text}</p>

    </div>

    </>
 )
}
