import React from "react";
import '../components/Layout.css';

function Layout(props) {
  return (
    <div className="Layout">
      {props.children}
    </div>
  );
}

export default Layout;