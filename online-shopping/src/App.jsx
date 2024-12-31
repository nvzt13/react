import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import PageContainer from "./container/PageContainer.jsx";
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'


function App() {
  return (
    
        <PageContainer>
				<Loading />
				<Header />
				<RouterConfig />
        </PageContainer>
    
  )
}

export default App
