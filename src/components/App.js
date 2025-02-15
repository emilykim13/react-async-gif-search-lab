import React from 'react'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <div className="container">
          <GiftListContainer />
        </div>
    </div>
  )
}

export default App
