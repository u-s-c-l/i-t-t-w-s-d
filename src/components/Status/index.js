import React from "react";
import PropTypes from "prop-types";

const Status = ({ onChange, value }) => {
  return (
    <div className="field mx-auto max-w-fit">
      <label
        htmlFor="status"
        aria-label="status-field"
        className="text-xl mr-2 font-light"
      >
        status:
      </label>
      <input
        aria-label="status-field-input"
        id="status"
        type="text"
        onChange={onChange}
        maxLength="35"
        value={value}
        placeholder="It's a nice day!"
        required
        className="peer border-b-2 border-tblack font-extralight p-1 mt-2 focus:outline-none focus:border-green-500 focus:invalid:border-tpink"
      />
    </div>
  );
};

Status.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any
};
export default Status;
