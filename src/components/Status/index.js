import React from "react";
import PropTypes from "prop-types";

const Status = ({ onChange, value }) => {
  return (
    <div className="field">
      <label htmlFor="status">status:</label>
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
  value: PropTypes.object
};
export default Status;
