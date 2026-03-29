import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>Loading Product...</div>;
  if (!product) return <div style={{ textAlign: 'center', marginTop: '100px' }}>Product not found!</div>;

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '50px 10%', fontFamily: 'sans-serif' }}>
      <Link to="/products" style={{ color: '#666', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Products</Link>
      <div style={{ display: 'flex', marginTop: '40px', gap: '60px', alignItems: 'center' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img 
            src={product.image_link} 
            alt={product.name} 
            style={{ width: '100%', maxWidth: '400px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>{product.name}</h1>
          <p style={{ color: '#ec4899', fontSize: '28px', fontWeight: 'bold', margin: '20px 0' }}>${product.price}</p>
          <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <p style={{ lineHeight: '1.8', color: '#666' }}>{product.description || "High quality Maybelline product."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;