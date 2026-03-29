import React from 'react';

function Hero() {
  return (
    <div style={{ 
      background: 'linear-gradient(45deg, #6b21a8, #9333ea)', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
          Showcase your app <br/> beautifully.
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '40px', opacity: '0.9' }}>
          Launch your mobile app landing page faster with this free theme!
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{ 
            padding: '15px 35px', 
            borderRadius: '50px', 
            border: '2px solid white', 
            background: 'transparent', 
            color: 'white', 
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            App Store
          </button>
          <button style={{ 
            padding: '15px 35px', 
            borderRadius: '50px', 
            border: 'none', 
            background: 'white', 
            color: '#6b21a8', 
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Google Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
