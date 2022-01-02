import React, {useState} from 'react'
//to use useState always declare useState here

export default function TextForm(props) {
    //useState shold be always declared inside the function
    const [text,setText] = useState('')//we can make more than one state
    //first is the word in our html file then setText is function and value inside braces of useState
    //is the value of text(i.e text = Enter text here) all text will get replaced by 'Enter text here'

    //setText("Enter new text");//now the value of text will be replaced by the string written in braces of
    //setText (i.e text = Enter new text)

    const handelUpClick = ()=>{//arrow function
        //console.log("Uppercase button was clicked")//output shown in console writting console.log is not necessary
        let newText = text.toUpperCase();
        setText(newText)//ouput in place of text or in place of Enter text here
        props.showAlert("Converted to UpperCase","success")
    }

    const handelOnChange = (event)=>{
   // console.log("on change")//output shown in console writting console.log is not necessary
        setText(event.target.value)//using this allows to write some additional text in textarea 
        //if we do not use above setText the we cannot change the text of textarea
    }

    const handelDownClick = ()=>{

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }

    const handelonClick = ()=>{

        let newText = text[0].toUpperCase();
        var i;
        for(i=1;i<text.length;i++){
            newText += text[i].toLowerCase();
        }
        setText(newText)
        props.showAlert("Converted to Sentence case","success")
    }

    const handelAlternateClick = ()=>{

        var i;
        let newText = "";
        var j = 0;
        for(i=0;i<text.length;i++){
            
            if(j%2===0){
                newText += text[i].toLowerCase()
            }
            else if(j%2!==0){
                newText += text[i].toUpperCase()
            }
            if(text[i]===" "){
                j = 0;
            }
            else{
                j++;
            }
        }
        setText(newText)
        props.showAlert("Converted in alternate form","success")
    }

    const handeltOGGLEClick = ()=>{

        let newText = text[0].toLowerCase()
        var i;
        for(i=1;i<text.length;i++){
            newText += text[i].toUpperCase();
        }
        setText(newText)
        props.showAlert("Converted in toggle form","success")
    }


    const handelCapitalizeClick = ()=>{

        var i;
        let newText = "";
        var j = 0;
        newText = text[0].toUpperCase()
        for(i=1;i<text.length;i++){
            
            if(text[i]===" "){
                newText += text[i].toLowerCase()
                j = i+1;
                newText += text[j].toUpperCase()
                i = j
            }
            else{
                newText += text[i].toLowerCase()
            }
        }
        setText(newText)
        props.showAlert("Converted to Capitalized form","success")
    }


    const handelclearClick = ()=>{

        let newText = ""
        setText(newText)
        props.showAlert("Cleared the text","success")
    }


    const handelCopyClick = ()=>{
        var text = document.getElementById('exampleFormControlTextarea1')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard","success")
    }

    
    return (
        <>
        <div className='container' style={{color: props.Mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3 my-3">{/*so the text below is replaced by Enter text here in website */}
                                  
                                  {/*onchange function is compulsory to write in textarea because it allows us to change text of textarea
                                  without onchange we cannot chane the text of textarea */}
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.Mode==='dark'?'white':'white', color: props.Mode==='dark'?'#0014ff':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            
        </div>

        <div className="container my-3" style={{color: props.Mode==='dark'?'white':'black'}}>
            
            {/*The below is used to calculate total word and characters written in textarea*/}
            <p> words count: {text.split(" ").filter((element)=>{return element.length!==0}).length}   |  characters count: {text.length}  |   {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read the text.</p>
            
            {/*below is used to show user the time he will require to read data in textarea */}
            
        </div>

        <div className='container'>
            <button className='btn btn-primary mx-2 my-3' disabled={text.length===0}  onClick={handelUpClick}>UPPER CASE</button>
            <button className='btn btn-primary mx-3 my-3' disabled={text.length===0}  onClick={handelDownClick} >lower case</button>
            <button className='btn btn-primary mx-3 my-3' disabled={text.length===0}  onClick={handelonClick}>Sentence case</button>
            <button className='btn btn-primary mx-3 my-3' disabled={text.length===0}  onClick={handelAlternateClick}>aLtErNaTe cAsE</button>
            <button className='btn btn-primary mx-3 my-3' disabled={text.length===0}  onClick={handeltOGGLEClick}>tOGGLE CASE</button>
            <button className='btn btn-primary mx-3 my-3' disabled={text.length===0}  onClick={handelCapitalizeClick}>Capitalize Case</button>
            <button className='btn btn-primary mx-3 my-3' disabled={text.length===0}  onClick={handelclearClick}>clear</button>
            <button className='btn btn-primary mx-3 my-3' disabled={text.length===0}  onClick={handelCopyClick}>Copy Text</button>
            
        </div>
        </>
    )
}
