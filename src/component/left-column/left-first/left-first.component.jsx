import React from "react";
import "./left-first.styles.scss";

const LeftFirst = ({color}) => (
  <div className="left-first">
    <h2>Profile</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies
      ullamcorper accumsan. Suspendisse auctor orci vel risus dictum, id mollis
      ante facilisis. Ut tristique rhoncus odio et mattis. Mauris hendrerit in
      urna eu dapibus. Sed et porttitor elit. Nunc dignissim, felis id egestas
      euismod, ipsum nunc blandit nisi, pretium ultricies enim eros iaculis
      tortor. Ut molestie gravida egestas.
    </p>
    <hr style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}/>
  </div>
);
export default LeftFirst;
