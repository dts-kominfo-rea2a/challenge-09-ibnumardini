// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  const { name, phone, email, photo: avatar } = data;

  return (
    <div className="box">
      <div className="avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="description">
        <h3 className="title">{name}</h3>
        <p className="subtitle">{phone}</p>
        <p className="subtitle">{email}</p>
      </div>
    </div>
  );
};

export default Contact;
