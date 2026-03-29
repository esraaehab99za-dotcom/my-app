import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero'; 
import About from './pages/About'; 
import ProductsPage from './productspage';

const PurpleSection = () => (
  <div style={{background: 'linear-gradient(45deg, #6b21a8, #ec4899)', padding:'100px 20px', textAlign:'center', color:'#fff', fontFamily:'sans-serif'}}>
    <p style={{letterSpacing:'4px', fontSize:'13px', fontWeight:'bold', marginBottom:'20px'}}>DOWNLOAD FOR FREE</p>
    <h2 style={{fontSize:'45px', fontWeight:'300', marginBottom:'40px'}}>Get the app now!</h2>
    <div style={{display:'flex', justifyContent:'center', gap:'20px'}}>
       <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" style={{height:'50px'}} alt="ios"/>
       <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" style={{height:'50px'}} alt="android"/>
    </div>
  </div>
);

const UsersList = () => {
  const users = [
    { id: 1, name: 'Ahmed Ali', color: 'red' },
    { id: 2, name: 'Sayed Fares', color: 'green' },
    { id: 3, name: 'Gamal Omar', color: 'blue' },
    { id: 4, name: 'Ezz Kareem', color: 'yellow' }
  ];
  return (
    <div style={{ padding: '40px 10%', background: '#fff', fontFamily: 'sans-serif' }}>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: '20px', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
          <h3 style={{ margin: '0', fontSize: '22px', fontWeight: 'bold' }}>My Name is {user.name}</h3>
          <p style={{ margin: '5px 0', fontSize: '16px', color: '#444' }}>My Color is {user.color}</p>
          <p style={{ margin: '0', fontSize: '14px', color: '#999' }}>My id is {user.id}</p>
        </div>
      ))}
    </div>
  );
};

const Home = () => (
  <>
    <Hero />
    <PurpleSection />
    <UsersList />
    <footer style={{background:'#000', color:'#666', padding:'25px', textAlign:'center', fontSize:'13px', fontFamily:'sans-serif'}}>
      &copy; Your Website 2022. All Rights Reserved.
    </footer>
  </>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<div style={{padding:'100px 10%'}}><h1>Download Page</h1></div>} />
      </Routes>
    </Router>
  );
}