import './App.css';
import img7 from './image/img7.jpg';
import Box from './Components/Box';
import ImageBox1 from './Components/ImageBox1';
import ImageBox2 from './Components/ImageBox2';

function App() {
  return (
    <div className="mainContainer" style={{backgroundImage: `url(${img7})`}}>
      <ImageBox1 />
      <ImageBox2 />
      <Box />
    
    </div>
  );
}


export default App;
