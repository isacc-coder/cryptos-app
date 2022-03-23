import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Routes ,Route } from 'react-router-dom';                      
import {Navbar,Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';
import './App.css'
const App = () => {
    return (
        <div className="app">
        <div className="navbar">
           <Navbar/>
        </div>
        <div className="main">
        <Layout>
    <div className="routes">
    
        <Routes>
        <Route  path='/' element={<Homepage/>} />
        <Route  path='/exchanges' element={<Exchanges/>} />
        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
        <Route exact path ='/crypto/:coinId' element ={<CryptoDetails />} /> 
        <Route  path='/news' element={<News/>} />
       </ Routes>
    </div>
</ Layout>
        
        <div className="footer" >
           <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
               Cryptoverse <br />
               ALl rights reserverd
             </Typography.Title> 
             <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
            </Space> 
          </div>             
        </div>
    </div>
    )
}

export default App;
