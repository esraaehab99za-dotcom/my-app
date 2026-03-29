import React, { useState, useEffect } from 'react';

const ProductsPage = () => {
  const [makeup, setMakeup] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then((res) => res.json())
      .then((data) => {
        setMakeup(data.slice(0, 24));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredMakeup = makeup.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '20px' }}>Loading...</div>;

  const renderGrid = (title, items) => (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '30px', fontWeight: 'bold' }}>{title}</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '30px' 
      }}>
        {items.map((item) => (
          <div key={item.id} style={{ background: '#fff', padding: '20px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            {}
            <div onClick={() => setSelectedProduct(item)} style={{ cursor: 'zoom-in' }}>
              <img 
                src={item.image_link} 
                alt={item.name} 
                style={{ width: '100%', height: '220px', objectFit: 'contain' }} 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300' }}
              />
            </div>
            <h3 style={{ fontSize: '15px', marginTop: '15px', color: '#444', height: '40px', overflow: 'hidden' }}>{item.name}</h3>
            <p style={{ color: '#ec4899', fontWeight: 'bold', fontSize: '18px' }}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#fff' }}>
      
      <div style={{ padding: '30px 10%', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '100%' }}>
          <input 
            type="text" 
            placeholder="Search for products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              width: '100%', padding: '12px 20px', borderRadius: '8px', border: '1px solid #ddd', 
              outline: 'none', fontSize: '16px', background: '#f9f9f9' 
            }} 
          />
        </div>
      </div>

      <div style={{ padding: '40px 10%' }}>
        {renderGrid("Makeup Essentials", filteredMakeup)}
      </div>

      {selectedProduct && (
        <div onClick={() => setSelectedProduct(null)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', padding: '40px', borderRadius: '20px', display: 'flex', maxWidth: '900px', width: '90%', position: 'relative' }}>
            <span onClick={() => setSelectedProduct(null)} style={{ position: 'absolute', top: '15px', right: '20px', cursor: 'pointer', fontSize: '30px', color: '#999' }}>&times;</span>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <img src={selectedProduct.image_link} alt="" style={{ maxWidth: '100%', maxHeight: '450px', objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1, paddingLeft: '30px' }}>
              <h2 style={{ fontSize: '26px' }}>{selectedProduct.name}</h2>
              <p style={{ fontSize: '30px', color: '#ec4899', fontWeight: 'bold', margin: '20px 0' }}>${selectedProduct.price}</p>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{selectedProduct.description || "High quality product from Maybelline, perfect for your daily look."}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;