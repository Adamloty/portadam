'use client';

import React from 'react';
import styles from './Contact.module.css';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formField}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formField}>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div className={styles.formField}>
        <label htmlFor="message">Your message (optional)</label>
        <textarea id="message" name="message" rows={10}></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default ContactForm;
