import React, {useState} from 'react';
import Header from './Header';
import Home from './Home';
import Resources from './Resources';
import { Route, Routes } from 'react-router-dom'

function App() {
  // const windowWidth = useRef(window.innerWidth);
  // const windowHeight = useRef(window.innerHeight);
  // console.log('width: ', windowWidth.current);
  // console.log('height: ', windowHeight.current);

  const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  }
  window.addEventListener("resize", documentHeight)
  documentHeight()

  // load messages from localstorage if there are messages stored, else initialise as empty array
  const [messages, setMessages] = useState(
                                    localStorage.getItem("messages") 
                                      ? JSON.parse(localStorage.getItem("messages")) : []
                                  );

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home 
            messages={messages}
            setMessages={setMessages}
          />}>
        </Route>
        <Route exact path='/resources' element={<Resources/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
