import React, { useState } from 'react';
import "../App.css";
const NormalValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mob, setMob] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if(!mob.trim()){
        errors.mobile='Mobile no. is required';
    }


    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form submitted');
    } else {
      // Form has errors, display them
      setErrors(validationErrors);
    }
  };

  return (
    <>
    <div className='container'>
        <div className='user'>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
        className='input'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
        className='input'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="mobile">Mobil No.:</label>
        <input
        className='input'
          type="mobile"
          id="mob"
          value={mob}
          onChange={(e) => setMob(e.target.value)}
        />
        {errors.mob && <span className="error">{errors.mob}</span>}
      </div>



      <button  className='btn' type="submit">Submit</button>
    </form>
        </div>
    </div>
    </>
  );
};

export default NormalValidation;
