import React from "react";
import PropTypes from "prop-types";

const Edit = ({ onSubmit, children }) => {
  return (
    <div className="card">
      <form onSubmit={onSubmit} aria-label="name-status-form">
        <h1>Profile Card</h1>
        {children}
        <button type="submit" className="save">
          Save{" "}
        </button>
      </form>
    </div>
  );
};

Edit.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.any
};
export default Edit;
