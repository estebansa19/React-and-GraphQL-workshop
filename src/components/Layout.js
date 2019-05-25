import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <main className="layout">
    <>{children}</>
  </main>
);

Layout.propTypes = {
  children: PropTypes.array.isRequired
};

export default Layout;
