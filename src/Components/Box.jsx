import { useState } from "react";

function Box(){
    

    const [inputText,setInputtext] = useState("");
    const [result,setResult] = useState(1);
    const [resultText,setResulttext] = useState("");
    const [yesNo,setYesno] = useState(1);
    const [borderColor,setBordercolor]= useState('');
    
    let imageBox1 = document.getElementsByClassName('imageBox1');
    let imageBox2 = document.getElementsByClassName('imageBox2');

    const handleOnChange  = (event) =>{
        setInputtext(event.target.value);
        setResult(1);
        setBordercolor('');
        // mainContainer[0].style.background = `url(${img7})`;
        imageBox1[0].style.zIndex = '-1';
        imageBox2[0].style.zIndex = '-1';
        document.getElementById('songBolejo').pause();
        document.getElementById('songMoye').pause();
    }
    
    const handleOnClear = () => {
        setInputtext("");
        setResult(1);
        setResulttext("");
        setYesno(1);
        setBordercolor('');
        // mainContainer[0].style.background = `url(${img7})`;
        imageBox1[0].style.zIndex = '-1';
        imageBox2[0].style.zIndex = '-1';
        document.getElementById('songBolejo').pause();
        document.getElementById('songMoye').pause();
    }

    const handleOnSubmit = () => {
        document.getElementById('songBolejo').currentTime=0;
        document.getElementById('songMoye').currentTime=0;
        const isAllNumbers = /^\d+$/.test(inputText);

        if(inputText===''){
            setBordercolor('red');
            return;
        }
        setBordercolor('');
        if (isAllNumbers) {
        let numericValue = parseInt(inputText, 10);
        console.log("All characters are numbers. Numeric value:", numericValue);
        let tempNumericValue=0,sum=0,numberString='0';
        while(numericValue>0){
            tempNumericValue=numericValue%10;
            numericValue=Math.floor(numericValue/10);
            sum=sum+tempNumericValue;
            numberString = numberString + ' + ' + tempNumericValue;
        }
        console.log(numberString);
        let temp ='';
        temp = numberString+` = ${sum}`;
        if(sum===7){
            setYesno(0);
            imageBox1[0].style.zIndex = '1';
            imageBox2[0].style.zIndex = '-1';
            
            document.getElementById('songBolejo').play();
            document.getElementById('songMoye').pause();
        }else{
            setYesno(1);
            imageBox1[0].style.zIndex = '-1';
            imageBox2[0].style.zIndex = '1';
            document.getElementById('songBolejo').pause();
            document.getElementById('songMoye').play();
        }
        setResulttext(temp);
        } else {

        const wordCount = inputText.split(/\s+/).filter((word) => word.length > 0).length;
        let dhoniInputText = inputText.toLowerCase();
        if(dhoniInputText==='dhoni' || dhoniInputText==='mahendra singh dhoni' || dhoniInputText==='mahendrasinghdhoni'){
            setResulttext(inputText);
            setYesno(0);
            imageBox1[0].style.zIndex = '1';
            imageBox2[0].style.zIndex = '-1';
            document.getElementById('songBolejo').play();
            document.getElementById('songMoye').pause();
        }else if(wordCount===1){
            let temp ='';
            const inputTextWithoutSpaces = inputText.replace(/\s/g, '');
            if(inputTextWithoutSpaces.length===7){
                temp = inputText+`(${inputTextWithoutSpaces.length})`;
                setYesno(0);
                imageBox1[0].style.zIndex = '1';
                imageBox2[0].style.zIndex = '-1';
                document.getElementById('songBolejo').play();
                document.getElementById('songMoye').pause();
            }else{
                temp = inputText+`(${inputTextWithoutSpaces.length})`;
                setYesno(1);
                imageBox1[0].style.zIndex = '-1';
                imageBox2[0].style.zIndex = '1';
                document.getElementById('songBolejo').pause();
                document.getElementById('songMoye').play();
            }
            setResulttext(temp);
        }else{
            const words = inputText.split(/\s+/);
            let output = words.map((word) => `${word}(${word.length})`).join(' + ');
            const inputTextWithoutSpaces = inputText.replace(/\s/g, '');
            if(inputTextWithoutSpaces.length===7){
                output = output+` = ${inputTextWithoutSpaces.length}`;
                setYesno(0);
                imageBox1[0].style.zIndex = '1';
                imageBox2[0].style.zIndex = '-1';
                document.getElementById('songBolejo').play();
                document.getElementById('songMoye').pause();
            }else{
                output = output+` = ${inputTextWithoutSpaces.length}`;
                setYesno(1);
                imageBox1[0].style.zIndex = '-1';
                imageBox2[0].style.zIndex = '1';
                document.getElementById('songBolejo').pause();
                document.getElementById('songMoye').play();
            }
            setResulttext(output);
            
        }

        
        }
        setResult(0);
        
        // if(yesNo){
        //     imageBox1[0].style.display = 'none';
        //     imageBox2[0].style.display = 'block';
        // }else{
        //     imageBox1[0].style.display = 'block';
        //     imageBox2[0].style.display = 'none';
        // }
    }
    
    return(
        <div className="boxContent">
            <label htmlFor="textBox" style={{color:'white'}}>Behind Everything, There is a Reason..</label>
            <input id="textBox" type="search" placeholder="Enter your text.." value={inputText} onChange={handleOnChange} style={{borderColor:borderColor}}/>
            <div>
            <button type="submit" onClick={handleOnSubmit}>Check</button>
            <button type="submit" style={{marginLeft:'6px'}} onClick={handleOnClear}>Clear</button>
            </div>
            <div className={result?`resultBox`:`resultBox resultBoxAdd`}>
                <div className={yesNo?`yesNo`:``} style={{fontFamily: 'Caveat', cursive: true, fontSize:'1.5rem'}}>Message is clear</div>
                <div style={{textAlign:'center'}}>{resultText}</div>
                <div className={yesNo?`yesNo`:``} style={{fontFamily: 'Caveat', cursive: true, textAlign:'center', fontSize:'2rem', fontWeight:'bold'}}>Thala for a Reason</div>
                <div className={yesNo?``:`yesNo`} style={{fontFamily: 'Caveat', cursive: true, textAlign:'center', fontSize:'2rem', fontWeight:'bold'}}>Moye Moye</div>
            </div>
        </div>
    );
}

export default Box;