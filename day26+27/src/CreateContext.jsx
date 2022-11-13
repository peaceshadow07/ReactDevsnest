import React, { createContext, useContext } from 'react'

const userContext = createContext(null);

function Foo({user}){
    return (<>
    <h2>This is Foo</h2>
    <Bar user={user}/>
    </>);
}

function Bar({user}){
    return (<>
    <h3>This is Bar</h3>
    <Baz user={user}/>
    </>);
}


function Baz(){
    const username = useContext(userContext);
    return (<>
    <h4>This is Baz : {username}</h4>
    </>);
}

export default function CreateContext() {
  const username = "Kartikeya";
  
    return (
    <div> 
      <h1>This is Parent</h1>
      <userContext.Provider value={username}>
      <Foo user={username}/>
      </userContext.Provider>
    </div>
  )
}
