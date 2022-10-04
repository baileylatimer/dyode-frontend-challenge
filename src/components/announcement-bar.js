
import React from "react"

const AnnouncementBar = props => (
<div className="announcement-bar flex justify-center items-center py-2">
  <div className="container flex justify-center items-center">
    <p>{props.text}</p>
  </div>
</div>
);



export default AnnouncementBar