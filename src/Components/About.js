import React, {useState} from 'react'

export default function About(props) {

    // const [Mystyle,setMystyle] = useState( {
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [Btntext,setBtntext] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(Mystyle.color==='black'){
    //         setMystyle ( {
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtntext("Enable Light Mode")
    //     }
    //     else{
    //         setMystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtntext("Enable Dark Mode")
    //     }
    // }

    // let Mystyle = {
    //     color: 'white',
    //     backgroundColor: 'black'
    // }

    return (
         <div className='container' style={{backgroundColor: props.Mode==='dark'?'#212529':'white'}} > {/*In this way we can use style inside react*/}
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">   
                        <button className="accordion-button" type="button" style={{backgroundColor: props.Mode==='dark'?'#91acb1':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Welcome to the Play With Text Generator Tool
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.Mode==='dark'?'#212529':'white'}} >
                            <p style={{color: props.Mode==='dark'?'white':'black'}}>A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options below:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">               
                        <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.Mode==='dark'?'#91acb1':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Sentence case
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.Mode==='dark'?'#212529':'white'}} >
                            <p style={{color: props.Mode==='dark'?'white':'black'}}>The sentence case converter will allow you to paste any text you’d like, and it will automatically transform it to a fully formed structured sentence.

It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i’s into I’s. Every letter after a full stop will get converted into an upper case letter.</p>
 <p style={{textAlign: "left",padding: "10px",color: props.Mode==='dark'?'white':'black'}}>This is an example of sentence case.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">              
                        <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.Mode==='dark'?'#91acb1':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Lower Case
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.Mode==='dark'?'#212529':'white'}} >
                            <p style={{color: props.Mode==='dark'?'white':'black'}}>If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.</p>
                            <p style={{textAlign: "left",color: props.Mode==='dark'?'white':'black'}}>this is an example of lower case.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingFour">              
                        <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.Mode==='dark'?'#91acb1':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Upper Case
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.Mode==='dark'?'#212529':'white'}} >
                            <p style={{color: props.Mode==='dark'?'white':'black'}}>The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).

To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.</p>

<p style={{textAlign: "left",padding: "10px",color: props.Mode==='dark'?'white':'black'}}>THIS IS AN EXAMPLE OF UPPER CASE.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingFive">              
                        <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.Mode==='dark'?'#91acb1':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Capitalize Case
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.Mode==='dark'?'#212529':'white'}} >
                            <p style={{color: props.Mode==='dark'?'white':'black'}}>The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.

Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.</p>

<p style={{textAlign: "left",padding: "10px",color: props.Mode==='dark'?'white':'black'}}>This Is An Example Of Capitalized Case.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingSix">              
                        <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.Mode==='dark'?'#91acb1':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Alternate Case
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.Mode==='dark'?'#212529':'white'}} >
                            <p style={{color: props.Mode==='dark'?'white':'black'}}>The alternate case converter will convert the text into alternate capital and small letters with each word starting with smal letter.
                            Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Alternate Case tab.</p>
                            <p style={{textAlign: "left",padding: "20px",color: props.Mode==='dark'?'white':'black'}}>tHiS iS eXaMpLe oF aLtErNaTe cAsE</p>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingSeven">              
                        <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.Mode==='dark'?'#91acb1':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            Toggle Case
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.Mode==='dark'?'#212529':'white'}} >
                            <p style={{color: props.Mode==='dark'?'white':'black'}}>The toggle case converter will convert the first character of text into small and convert remaining letters into capital.
                            Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Toggle Case tab.</p>
                            <p style={{textAlign: "left",padding: "10px",color: props.Mode==='dark'?'white':'black'}}>tHIS IS AN EXAMPLE OF TOGGLE CASE</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            

            {/* <button onClick={toggleStyle} className='btn btn-primary mx-2 my-3 '>{Btntext}</button> */}
        </div>
    )
}
