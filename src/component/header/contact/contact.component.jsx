import React, {useState} from "react";
import "./contact.styles.scss";

const ContactComponent = () => {
    const [properties] = useState({
        phone: 3456453,
        envelope: "jbazanaguirre@gmail.com",
        address: "Coronel Olmedo 1683, Cordoba Argentina",
        github: "https://github.com/the-julianson",
        linkedin: "https://www.linkedin.com/in/julianbazanaguirre/"
    })

  return (
    
    <div className="contactComp">
      <ul>
          {Object.entries(properties).map( ([item, value]) => 
                <li className={``} key={item}>{`${value}`}</li>
            )}
      </ul>
    </div>
  );
};

export default ContactComponent;
