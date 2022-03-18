import React from "react";
import PropTypes from "prop-types";

const Edit = ({ onSubmit, children }) => {
  return (
    <div className="card">
      <form
        onSubmit={onSubmit}
        aria-label="name-status-form"
        className="p-4 flex flex-col items-center border border-tblack font-extralight p-1 mt-4 w-full h-48 bg-slate-50 w-full flex justify-around rounded-tl-3xl rounded-tr-3xl max-w-sm  "
      >
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
