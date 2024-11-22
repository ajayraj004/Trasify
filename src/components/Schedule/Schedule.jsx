import React, { useState } from 'react';

const Schedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pickupDate: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSuccessMessage('Pickup successfully scheduled!');
    // Reset the form
    setFormData({
      name: '',
      address: '',
      pickupDate: '',
    });
    // Clear the success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.header}>Schedule a Pickup</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your name"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="address" style={styles.label}>Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your address"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="pickupDate" style={styles.label}>Pickup Date:</label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
        {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,45,121,1) 35%, rgba(0,212,255,1) 100%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: '450px',
    width: '90%',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: '600',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px 15px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontFamily: "'Roboto', sans-serif",
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  successMessage: {
    marginTop: '15px',
    textAlign: 'center',
    color: 'green',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default Schedule;
