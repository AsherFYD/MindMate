import React, {useState} from 'react';
import ChatBox from './ChatBox'
import Header from './Header';
import ChatHeader from './ChatHeader';
import Footer from './Footer';

function App() {
  const [messages, setMessages] = useState(
                                    localStorage.getItem("messages") 
                                      ? JSON.parse(localStorage.getItem("messages")) : []
                                  ); // load messages from localstorage if there are messages stored, else initialise as empty array

  return (
    <div className="App">
      <Header />
      <ChatHeader 
        messages={messages}
      />
      <div className="ChatBox">
          <ChatBox 
            messages={messages}
            setMessages={setMessages}
          />
      </div>
      <Footer 
        setMessages={setMessages}
      />
    </div>
  );
}

export default App;
