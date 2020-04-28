import React, {useState} from "react";
import "./contact.styles.scss";

const ContactComponent = () => {
    const [{phone, email,address, github, linkedin}] = useState({
        phone: 3456453,
        email: "jbazanaguirre@gmail.com",
        address: "Coronel Olmedo 1683, Cordoba Argentina",
        github: "github",
        linkedin: "linkedin"
    })

  return (
    
    <div className="contactComp">
      <ul>
        <li className="phone">{phone}</li>
        <li className="email">{email}</li>
        <li className="address">{address}</li>
        <li className="github">{github}</li>
        <li className="linkedin">{linkedin}</li>
      </ul>
    </div>
  );
};

export default ContactComponent;
