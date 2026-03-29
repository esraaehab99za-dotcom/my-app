 import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '100px 10%', fontFamily: 'sans-serif', lineHeight: '1.6', background: '#fff', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#333' }}>
        About Our Application
      </h1>
      
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam quo eaque ipsum quidem officiis eligendi provident nesciunt. 
        Quae nihil, explicabo ipsa repudiandae quidem deserunt aut sint porro et rerum sequi delectus sapiente amet consequatur qui nobis aliquid ab? 
        Harum molestias veniam eum! Odit sit atque facere omnis, consequatur aliquam delectus ipsa reprehenderit voluptas quo blanditiis exercitationem numquam aspernatur magnam.
      </p>

      <div style={{ marginTop: '30px', padding: '20px', borderLeft: '5px solid #002c5c', background: '#f8f9fa' }}>
        <p style={{ fontSize: '18px', color: '#333', fontWeight: '500', margin: 0 }}>
          Our mission is to provide the best landing page templates for developers using React and modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default About;