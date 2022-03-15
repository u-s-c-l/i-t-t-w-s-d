import React, { useContext, useState, useEffect } from "react"
import socketio from "socket.io-client"


// this is to use the useSocket hook on required buttons
const SocketContext = React.createContext();

export const useSocket = useContext(SocketContext)

// this is for the SocketContext Provider 

const SocketProvider = (props) => {

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const ENDPOINT = "https://localhost:3003"
    const newSocket = 
    setSocket(io(ENDPOINT))
    return () => newSocket.close();
  }, [setSocket])

  if (!socket) {
    return <div>Loading...</div>
  }

  return (

    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
