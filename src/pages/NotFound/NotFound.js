import React from "react";

const NotFound = () => {
  return (
    <div
      id="not-found-div"
      className="flex justify-center items-center w-screen h-screen text-center"
    >
      <p
        id="not-found"
        className="text-slate-50 text-3xl font-bold"
        role="alert"
      >
        Sorry, we can&apos;t find the page you&apos;re looking for!
      </p>
    </div>
  );
};

export default NotFound;
