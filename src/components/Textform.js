import React,{useState} from 'react'

export default function Textform(props) {
const handleupclick =()=>{
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success");
}
const handlelcopy =()=>{
  console.log("i am copy");
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy the text","success");
}

const handleloclick =()=>{
  console.log("lowercase was clicked");
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to lowercase","success");
}
const handleOnchange =(event)=>{
    console.log("on change");
    setText(event.target.value)
}
 
    const[text, setText]=useState('');
 //text="new text";//wrong way to change the state 
 //setText("new text");//correct way change the state
    return (
      <>
  <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>

<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#042743':'white' ,color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
</div>
<button type="button" className="btn btn-outline-warning mx-2" onClick={handleupclick}>Convert to uppercase</button>
<button type="button" className="btn btn-outline-warning mx-2" onClick={handleloclick}>Convert to lowercase</button>
<button type="button" className="btn btn-outline-warning mx-2" onClick={handlelcopy}>Copy text</button>
  </div>
  <div className="container  my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text summery</h1>
    <p>{text.split("").length} words and {text.length} characters</p>
    <p>{0.008* text.split("").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox"}</p>

  </div>
  </>
  )
}
