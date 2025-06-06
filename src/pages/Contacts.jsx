import React, { useState, useContext } from 'react';
import instagramLogo from '../assets/images/instagram.svg';
import telegramLogo from '../assets/images/telegram.svg';
import facebookLogo from '../assets/images/facebook.svg';
import { CONSTANTS } from "../environments/environment";
import { DarkModeContext } from '../context/DarkModeContext';

const Contacts = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const BOT_TOKEN = '7731456459:AAEJMEHyq1W172Su-stH6yjVpwIwyc5Q9Lo';
    const CHAT_ID = 2030797847;
  
    const { name, surname, message } = formData;
  
    if (!name || !surname || !message) {
      console.log(name, surname, message);
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
  
    const textMessage = `Yangi kontakt xabari:\nIsm: ${name}\nFamiliya: ${surname}\nXabar: ${message}`;
  
    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: textMessage,
        }),
      });
  
      const data = await response.json();
      if (data.ok) {
        console.log('Xabar yuborildi:', data);
        alert('Xabar muvaffaqiyatli yuborildi!');
        setFormData({
          name: '',
          surname: '',
          message: ''
        });
      } else {
        console.error('Telegram API xatosi:', data.description);
        alert(`Xabar yuborishda xato: ${data.description}`);
      }
    } catch (error) {
      console.error('Xato:', error);
      alert('Xabar yuborishda xato');
    }
  };

  return (
    <section className={`contacts ${darkMode ? 'dark' : 'light'}`}>
      <div className="container contacts_content">
        <div className="contacts_textbox">
          <h2 className="contacts_title">DO YOU HAVE A PROJECT TO DISCUSS?</h2>

          <div className="contacts_dev_info">
            <p className="information">SOCIAL MEDIA</p>

            <a href="https://www.instagram.com/firdavskomilov01/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://t.me/firdavs2005_bot" target="_blank" rel="noopener noreferrer">
              <img src={telegramLogo} alt="Telegram" />
            </a>
            <a href="https://www.facebook.com/Фирдавс" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="text-contact">CONTACT FORM</h2>

          <div className="text">
            <label>NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="ism"
            />
          </div>

          <div className="text">
            <label>SURNAME</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="surname"
            />
          </div>

          <div className="massage">
            <label>MESSAGE</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="massage"
            />
          </div>

          <button type="submit" className="btn">SEND</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;

