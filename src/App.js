import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import ProductsPage from './pages/productspage'; 

const Hero = () => (
  <div style={{display:'flex', padding:'80px 10%', alignItems:'center', gap:'40px', fontFamily:'sans-serif'}}>
    <div style={{flex:1}}>
      <h1 style={{fontSize:'55px', fontWeight:'300', lineHeight:'1.1', marginBottom:'20px'}}>Showcase your app <br/> <i style={{fontWeight:'400'}}>beautifully.</i></h1>
      <p style={{color:'#6c757d', fontSize:'18px', marginBottom:'30px'}}>Launch your mobile app landing page faster with this free theme from Start Bootstrap!</p>
      <div style={{display:'flex', gap:'15px'}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" style={{height:'45px'}} alt="ios"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" style={{height:'45px'}} alt="android"/>
      </div>
    </div>
    <div style={{flex:1, textAlign:'center'}}>
      <img 
        src="https://startbootstrap.github.io/startbootstrap-new-age/assets/img/demo-screen-1.png" 
        style={{width:'260px', border:'12px solid #212529', borderRadius:'45px', boxShadow:'0 15px 35px rgba(0,0,0,0.2)'}} 
        alt="phone"
      />
    </div>
  </div>
);

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

const CopyrightFooter = () => (
  <footer style={{background:'#000', color:'#666', padding:'25px', textAlign:'center', fontSize:'13px', fontFamily:'sans-serif'}}>
    &copy; Your Website 2022. All Rights Reserved.
  </footer>
);

const UsersList = () => {
  const users = [
    { id: 1, name: 'ahmed ali', color: 'red' },
    { id: 2, name: 'sayed fares', color: 'green' },
    { id: 3, name: 'gamal omar', color: 'blue' },
    { id: 4, name: 'ezz kareem', color: 'yellow' }
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
  <div>
    <Hero />
    <PurpleSection />
    <CopyrightFooter />
    <UsersList />
  </div>
);

export default function App() {
  return (
    <Router>
      <nav style={{display:'flex', justifyContent:'space-between', padding:'15px 10%', background:'#fff', borderBottom:'1px solid #ddd', alignItems:'center', fontFamily:'sans-serif', position:'sticky', top:0, zIndex:1000}}>
        <Link to="/products" style={{fontSize:'22px', fontWeight:'bold', textDecoration:'none', color:'#000'}}>
            StartBootstrap
        </Link>
        <div style={{display:'flex', gap:'25px'}}>
          <Link to="/" style={{textDecoration:'none', color:'#666', fontWeight:'500'}}>Home</Link>
          <Link to="/about" style={{textDecoration:'none', color:'#666', fontWeight:'500'}}>About</Link>
          <Link to="/download" style={{textDecoration:'none', color:'#666', fontWeight:'500'}}>Download</Link>
          <button style={{background:'#002c5c', color:'white', padding:'10px 20px', borderRadius:'25px', border:'none', cursor:'pointer'}}>Send Feedback</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={
            <div style={{padding:'100px 10%', fontFamily:'sans-serif'}}>
                <h1></h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam quo eaque ipsam quidem officiis eligendi provident nesciunt. Quae nihil, explicabo ipsa repudiandae quidem deserunt aut sint porro et rerum sequi delectus sapiente amet consequatur qui nobis aliquid ab? Harum molestias veniam eum! Odit sit atque facere omnis, consequatur aliquam delectus ipsa reprehenderit voluptas quo blanditiis exercitationem numquam aspernatur magnam, debitis commodi inventore beatae consequatur dolore. Nam impedit sit, facilis rerum quas quidem vel, placeat magni corrupti, praesentium maxime veritatis consequatur natus omnis explicabo soluta inventore quisquam. Expedita nisi, fugiat dicta quae, nobis impedit quisquam, ab perferendis nemo a itaque!</p>
            </div>
        } />
        <Route path="/download" element={
            <div style={{padding:'100px 10%', fontFamily:'sans-serif'}}>
                <h1> HEllo from Download Page</h1>
            </div>
        } />
      </Routes>
    </Router>
  );
}