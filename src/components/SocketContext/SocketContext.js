import React, { useContext, useState, useEffect } from "react";
import io from "socket.io-client";
import PropTypes from "prop-types";


// this is to use the useSocket hook where required
const SocketContext = React.createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

// this is for the SocketContext Provider 

export const SocketProvider = (props) => {
 
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ENDPOINT = "https://ultimate-quiz-game-sock.herokuapp.com/"; 
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  if (!socket) {
    return <div>Loading...</div>;
  }

  return (

    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.any
};


