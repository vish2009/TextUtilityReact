import React, {useState} from 'react'
import PropTypes from 'prop-types'
export default function TextArea(props) {
    // defining all state variables with hooks
    const [text, setText] = useState("Enter the Text here....!");
    // const [textColor, setTextColor] = useState('black');
    // const [isBlack, setIsBlack] = useState(true);

    // functions
    const handelOnChange = (event)=>{
        setText(event.target.value)
    }
    const handelUpClick = ()=>{
        setText(text.toUpperCase())
    }
    const handelLoClick = ()=>{
        setText(text.toLowerCase())
    }
    const handelClearClick = ()=>{
        setText("");
    }
    // const handleChnageTextColor = () => {
    //   setIsBlack(!isBlack);
    //   setTextColor(isBlack ? 'red' : 'black ');
    // }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        alert("copied to clipboard")
    }

    // const handlePaste =()=>{
    //     setText(navigator.clipboard.readText())
    //     alert("success")
    // }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    //main return of function component
    return (
        <>
        <div>
            <h1 className="my-2" style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            {/* <textarea className="form-control mb-3" style={{color:textColor}} onChange={handelOnChange} value={text} id="myBox" rows="10"></textarea> */}
            <textarea className="form-control my-2" onChange={handelOnChange} value={text} id="myBox" rows="10"></textarea>
            <button disabled={text.length===0} className="btn btn-info my-2" onClick={handelUpClick} >UpperCase</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2 " onClick={handelLoClick}>LowerCase</button>
            <button disabled={text.length===0} className="btn btn-info my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy to Clipboard</button>
            {/* <button className="btn btn-success my-2 mx-2" onClick={handlePaste}>Paste From Clipboard</button> */}
            <button disabled={text.length===0} className="btn btn-info my-2" onClick={handelClearClick}>Clear</button>
            {/* <button className="btn btn-success mx-2 my-2" onClick={handleChnageTextColor}>Swap text color</button>             */}
        </div>

        <div className={`jumbotron my-3 text-${props.mode==='light'?'dark':'white'}`}>
            <h1 className="display-5">Your Text Summary below.</h1>
            <p className="lead">{text.length===0?0:Math.ceil((2*text.split(" ").length)/60)} Minute read for <b>{text.length}</b> Characters & <b>{text.split(" ").length===1&&text.length===0?0:text.split(" ").length}</b> Words</p>
        </div>
        </>
    )
}
TextArea.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
}