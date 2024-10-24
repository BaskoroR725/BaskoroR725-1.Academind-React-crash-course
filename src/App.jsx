import { useState } from 'react'

import './App.css'
import MainHeader from './components/MainHeader'
import PostList from './components/PostLists'

function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  function showModalHandler(){
    setModalIsVisible(true);
  }

  function hideModalHandler(){
    setModalIsVisible(false);
} 

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler} 
        />
      </main>
    </>
  )
}

export default App
