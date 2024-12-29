import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import PageContainer from "./container/PageContainer.jsx";
import  ProductList from "./components/ProductList";
function App() {
  return (
    
        <PageContainer>
				<Header />
				<ProductList />
        </PageContainer>
    
  )
}

export default App
