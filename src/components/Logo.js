import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* les images importer depuis la balise img sont accessibles dans public */}

      <img src="./logo192.png" alt="Logo dev" />
      <h3>Devillers Denis</h3>
    </div>
  );
};

export default Logo;
