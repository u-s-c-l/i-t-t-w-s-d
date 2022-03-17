import React from "react";
import PropTypes from "prop-types";

const Status = ({ onChange, value }) => {
  return (
    <div className="field">
      <label htmlFor="status" aria-label="status-field">
        status:
      </label>
      <input
        id="status"
        type="text"
        onChange={onChange}
        maxLength="35"
        value={value}
        placeholder="It's a nice day!"
        required
      />
    </div>
  );
};

Status.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any
};
export default Status;
