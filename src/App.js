import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

const App = () => (
    <BrowserRouter>
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                <div className='routes'>
                    <Routes>
                        <Route exact path={'/'} element = {<Homepage/>} />
                        <Route exact path={'/exchanges'} element = {<Exchanges />} />
                        <Route exact path={'/cryptocurrencies'} element = {<Cryptocurrencies />} />
                        <Route exact path={'/crypto/:id'} element = {<CryptoDetails />} />
                        <Route exact path={'/news'} element = {<News />} />
                    </Routes>
                </div>
                </Layout>
            <div className='footer'>
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                FetchCrypto <br />
                    All rights are reserved <br />
                    This Website is made and maintained by <a href='https://www.linkedin.com/in/gourabchoudhuri/'>Gourab Choudhuri</a>
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/exchanges'>Exchanges</Link>
                    <Link to='/news'>News</Link>
                </Space> 
            </div>
            </div>
        </div>
        </BrowserRouter>
    );

export default App;
