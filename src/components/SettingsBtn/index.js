import React from "react";

const SettingsBtn = () => {
  return (
    <div className="bg-slate-50 w-28 flex justify-around rounded-3xl max-w-sm">
      <a id="settings_btn" href="/Settings">
        <i className="fa-solid fa-gear fa-2x "></i>
      </a>
    </div>
  );
};

export default SettingsBtn;
