import React, { useState } from 'react';
import supabase from '../utils/supabase';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (authError) throw authError;
      console.log('User signed up:', authData.user);
      const { data: mediaData, error: mediaError } = await supabase
        .from('media')
        .insert({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
        .select()
        .single();
      if (mediaError) throw mediaError;
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Error creating account');
      console.error('Error Creating Account:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-custom"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-custom"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-custom"
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <p>New to ALter World? <Link to="/signin">Click Here</Link></p>
      </form>
    </div>
  );
}