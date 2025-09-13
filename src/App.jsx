import { useState, useEffect} from 'react';
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

        //const setChatMessage = array[1];

        useEffect(() => {
          Chatbot.addResponses({
            'goodbye': 'Goodbye. Have a great day!',
            'give me a unique id': function() {
              return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
            }
          });
        }, []);
    return(
      <div className="app-container">

        {chatMessages.length === 0 && (
          <p className="welcome-message">
            Welcome to the chatbot project! Send a message using the textbox below.
          </p>
        )}
        
        <ChatMessages 
          chatMessages={chatMessages}
        />

        <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    );
}

export default App
