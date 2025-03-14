import React from 'react'
import { createClient } from "@supabase/supabase-js";

export default function SignIn() {

  // Initialize Supabase client with environment variables
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <>
    <section className='containeer'>
        <h2>Login In</h2>
        <form className='form'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />

            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' required />

            <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
    </section>
    </>
  )
}
