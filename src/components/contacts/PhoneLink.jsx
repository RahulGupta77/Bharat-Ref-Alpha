import React from "react";
import { Link } from "react-router-dom";

const PhoneLink = ({ phone, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `tel:${phone}`;
      }}
      className="text-blue-600 hover:underline"
    >
      {label}
    </Link>
  );
};

export default PhoneLink;
