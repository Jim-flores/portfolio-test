import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Alert from 'react-bootstrap/Alert';
import './styles/Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(e.target.user_name.value && e.target.user_email.value && e.target.message.value){
      emailjs.sendForm('service_bn3vfye', 'template_dqj4k4r', form.current, 'F_qU0Sf32GplKhLhr')
        .then((result) => {
          return alert('Enviado con exito')
        }, (error) => {
            console.log(error.text);
        });
    } else {
      
      return alert('Faltan datos')
    }

  };
  return (
    <div className="contact-form">
      <h2>Contact me</h2>
      <div className="fill-form">
        <form ref={form} onSubmit={sendEmail}>
       
          <div className="app-form-group">
              <input className="app-form-control" type="text" name="user_name" placeholder="NAME"/>
          </div>
          <div className="app-form-group">
              <input className="app-form-control" type="email" name="user_email" placeholder="EMAIL"/>
          </div>
          <div className="app-form-group">
              <input className="app-form-control" name="message" placeholder="MESSAGE"/>
          </div>
          <button className="app-form-button"  type="submit" value="Send" >SEND</button>
          
        </form>
      </div>
      
    </div>
  )
}

export default Contact