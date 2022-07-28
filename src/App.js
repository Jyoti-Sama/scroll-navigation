import './App.css';
import { Counter } from './components/Counterr';
import Four from './components/pages/Four';
import One from './components/pages/One';
import Three from './components/pages/Three';
import Two from './components/pages/Two';

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Footer from './components/pages/Footer';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  let navigate = useNavigate();

  const [triggered1, settriggered1] = useState(false)
  const [triggered2, settriggered2] = useState(false)
  const [triggered3, settriggered3] = useState(false)
  const [triggered4, settriggered4] = useState(false)

  const count = useSelector((state) => state.counter.value);
  const pages = useSelector((state) => state.counter.pages);
  console.log(count)

  
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // console.log(getWindowDimensions().height, " ", scrollPosition)

  //1
  if( !triggered1 && (scrollPosition > 0 && scrollPosition < getWindowDimensions().height/2)) {
    navigate('/');
    console.log("goint to one")

    settriggered1(true)
    settriggered2(false)
    settriggered3(false)
    settriggered4(false)
  }

  //2
  if( !triggered2 && (scrollPosition > getWindowDimensions().height/2 && scrollPosition < 3*getWindowDimensions().height/2)) {
    navigate('/two');
    console.log("goint to two ")

    settriggered1(false)
    settriggered2(true)
    settriggered3(false)
    settriggered4(false)
  }

  //3
  if( !triggered3 && (scrollPosition > 3*getWindowDimensions().height/2 && scrollPosition < 5*getWindowDimensions().height/2)) {
    navigate('/three');
    console.log("goint to three ")

    settriggered1(false)
    settriggered2(false)
    settriggered3(true)
    settriggered4(false)
  }
  if( !triggered4 && (scrollPosition > 5*getWindowDimensions().height/2 && scrollPosition < 7*getWindowDimensions().height/2)) {
    navigate('/four');
    console.log("goint to two ")

    settriggered1(false)
    settriggered2(false)
    settriggered3(false)
    settriggered4(true)
  }


  return (
    <div className="App">
      

      {pages}

      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="one" element={<Footer />} />
        <Route path="two" element={<Footer />} />
        <Route path="three" element={<Footer />} />
        <Route path="four" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
