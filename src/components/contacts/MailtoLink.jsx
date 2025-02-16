import React from "react";
import { Link } from "react-router-dom";

const MailtoLink = ({ email, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
      }}
      className="text-blue-600 hover:underline"
    >
      {label}
    </Link>
  );
};

export default MailtoLink;
