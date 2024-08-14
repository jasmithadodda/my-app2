import React, { useState } from 'react';

const PostForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    title: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Server response:', result);
    } catch (err) {
      console.error('Error during form submission:', err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        placeholder="User ID"
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="body"
        value={formData.body}
        onChange={handleChange}
        placeholder="Body"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
