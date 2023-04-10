import React, {useState, useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Resources from './Resources';
import { Route, Routes } from 'react-router-dom'

function App() {
  // to get the height of the screen, so that height:100vh will not be used
  // const documentHeight = () => {
  //   const doc = document.documentElement
  //   doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  // }
  // window.addEventListener("resize", documentHeight)
  // documentHeight() // call when app is first loaded

  // custom hook
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
            document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []) // no dependencies

    return windowSize;
  }
  const { height } = useWindowSize();
  console.log(height)

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
