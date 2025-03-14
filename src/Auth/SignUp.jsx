import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from 'react-router-dom'; 

export default function SignUp() {
    // Navigation hook
    const navigate = useNavigate();
    
    // Initialize Supabase client with environment variables
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    
    // State for form submission status
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });
    
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    // Handle form submission
    const handleCreate = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });
        
        try {
            // Generate a smaller ID within PostgreSQL integer range
            const uniqueId = Math.floor(Math.random() * 1000000); // Random number between 0 and 999,999
            
            // Insert data into Supabase with smaller ID
            const { error } = await supabase
                .from('media')
                .insert([{ 
                    id: uniqueId,
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }]);
                
            if (error) throw error;
            
            // Reset form on success
            setFormData({
                name: '',
                email: '',
                password: '',
            });
            
            setStatus({ 
                submitting: false, 
                submitted: true, 
                error: null 
            });
            
            // Navigate to home page after successful signup
            navigate('/home');
            
        }  catch (error) {
            console.error('Error Creating Account:', error);
            setStatus({ 
                submitting: false, 
                submitted: false, 
                error: error.message || 'An error occurred while creating your account.'
            });
        }
    };

    return (
        <>
        <section className='container'>
            <form onSubmit={handleCreate} className='form'>
                <h1>Sign Up</h1>
                {status.error && <p className="error-message">{status.error}</p>}
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id='password' 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={status.submitting}
                >
                    {status.submitting ? 'Sending...' : 'Submit'}
                </button>
            </form>
        </section>
        </>
    );
}