import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='py-3' style={{position:'fixed',bottom:'0px', backgroundColor:'rgb(33,37,41)', width:'100vw', color:'white', textAlign:'center'}}>
        
                    <p>Shoppee &copy; {currentYear}</p>
        
    </footer>
  )
}

export default Footer