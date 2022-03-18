import React from "react";
import PropTypes from "prop-types";

const Edit = ({ onSubmit, children }) => {
  return (
    <div className="card">
      <form
        onSubmit={onSubmit}
        aria-label="name-status-form"
        className="p-4 flex flex-col items-center border border-tblack font-extralight mt-4   bg-slate-50  justify-around rounded-lg max-w-sm m-4  "
      >
        <h1>Profile</h1>
        {children}
        <button type="submit" className="save mt-8 hover:font-bold">
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
