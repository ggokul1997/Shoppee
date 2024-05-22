import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from './screens/Cart'
import ErrorPage from './screens/ErrorPage'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <>
    
    
    
      <BrowserRouter>
      <Header/>
      <main className='py-3'>
      <Container>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/product/:id' element={<ProductScreen/>}/>
        </Routes>
        </Container>
        </main>
        <Footer/>
      </BrowserRouter>
    
    
    
    </>
  )
}

export default App