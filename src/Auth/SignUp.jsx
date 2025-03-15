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
      // Step 1: Sign up the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) {
        throw authError;
      }

      console.log('User signed up:', authData.user);

      // Step 2: Insert into media table (matching the schema: name, email, password)
      const { data: mediaData, error: mediaError } = await supabase
        .from('media')
        .insert({
          name: formData.name,
          email: formData.email,
          password: formData.password, // Note: Storing plain password is insecure
        })
        .select()
        .single();

      if (mediaError) {
        throw mediaError;
      }
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
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <p>New to ALter World? <Link to = "/signin">Click Here</Link></p>
      </form>
    </div>
  );
}