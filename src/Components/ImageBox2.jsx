import moye from '../image/moye.gif';
import moyemoye from '../audio/moye.mp3';

function ImageBox2(){
    return(
    <div className='imageBox2' style={{backgroundImage: `url(${moye})`}}>
        <audio id='songMoye' loop>
        <source src={moyemoye} type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
    </div>
    );
}

export default ImageBox2;