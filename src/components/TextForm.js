import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=> {
      //console.log("Handle function was clicked" + text)
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase !!!","success")
  }

  const handleLoClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !!!","success")
}

  const handleOnChange = (e)=> {
    setText(e.target.value)
  }

  const handleCapital = ()=> {
    var newText = text.split(" ");
    var length = text.split(" ").length;

    for(var i = 0; i< length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();

    }

    var newText1 = newText.join(" ");

    setText(newText1); 
    props.showAlert("Converted to newText !!!","success")

  }

  const handleExtraSpace = ()=> {
    let newText = text.split(/[  ]+/);
    let finalText = newText.join(" ") ;

    setText(finalText);
    props.showAlert("Extra Space Cleared !!!","success")
  }

  const handleClearSpace = ()=> {

    setText("");
    props.showAlert("TextArea Cleared!!!","success")
  }
  // const handleWordlength = (t)=> {
  //   var reg = /[a-z]/i; 
  //   var reg1 = /[0-9]/;
  //   var reg2 = /\W/;
  //   var count = 0;
  //   var arr = t.split(" ");
  //   var len = t.split(" ").length;
  //   for(var i =0; i < len;i++) {
  //     if(reg.test(arr[i] ) === true | reg1.test(arr[i]) === true | reg2.test(arr[i]) === true) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }

  

  const[text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className={`btn btn-${props.button} `} style={{color: props.mode === 'light'?'black' : 'white'}} onClick={handleUpClick}>Convert To Uppercase</button>
      <button className={`btn btn-${props.button} `} style={{color: props.mode === 'light'?'black' : 'white'}} onClick={handleLoClick} >Convert To Lowercase</button>
      <button className={`btn btn-${props.button} `} style={{color: props.mode === 'light'?'black' : 'white'}} onClick={handleCapital} >Title Case</button>
      <button className={`btn btn-${props.button} `} style={{color: props.mode === 'light'?'black' : 'white'}} onClick={handleExtraSpace} >Remove Extra Space</button>
      <button className={`btn btn-${props.button} `} style={{color: props.mode === 'light'?'black' : 'white'}} onClick={handleClearSpace} >Clear word</button>
      
    </div>
    <div className="container my-5" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2 className="my-4">Your text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
      <p className="my-3">{0.008 * text.split(" ").length} minutes taken to read the words</p>
      <h2 className="my-5">Preview</h2>
      <p>{text.length > 0 ?text:"Enter some text in your textarea to preview it!!!"}</p>
    </div>
    </>
  );
}
