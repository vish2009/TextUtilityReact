import React from 'react'

export default function About(props) {
    return (
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1 style={{textAlign: "center"}}>About TextUtility</h1>
            <p style={{fontSize: "20px"}}>You must have come accross a situation when you require the text to be quickly converted into upper or lower case or to remove extra spaces and other functions like this.</p>
            <h5>This app also allows you to do following things</h5>
            <ol style={{fontSize: "18px"}}>
                <li>Convert Text to Uppercase.</li>
                <li>Convert Text to Lowercase.</li>
                <li>Remove extra spaces if any.</li>
                <li>Copy converted text to clipboard.</li>
            </ol>
            <hr/>
            <h5>Summary of the text is provided as: </h5>
            <ol style={{fontSize: "18px"}}>
                <li>Number of words in the text.</li>
                <li>Number of characters in the text.</li>
                <li>Total expected time to read (in Minutes).</li>
            </ol>
            <hr/>
            <h2 style={{textAlign: 'center'}}>This React App is Created By Vishal Lodha.</h2>
            <ul style={{listStyleType: 'none',textAlign: "center",fontSize: '25px'}}>
                <li >Click <a style={{textDecoration: 'none'}} href="https://github.com/vish2009">here</a> to follow me on Github.</li>
                <li>Click <a style={{textDecoration: 'none'}}href="https://www.linkedin.com/in/vish2009/">here</a> to follow me on Linkedin</li>
            </ul>
        </div>
    )
}
