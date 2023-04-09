import React from 'react';
import ChatBox from './ChatBox'
import ChatHeader from './ChatHeader';
import Footer from './Footer';

const Home = ({messages, setMessages}) => {
  return (
    <>
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
    </>
  );
}

export default Home;
