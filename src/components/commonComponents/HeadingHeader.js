import React from "react";

const HeadingHeader = ({heading_name}) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand mx-auto" >
        {heading_name}
      </a>
    </div>
  );
};

export default HeadingHeader;
