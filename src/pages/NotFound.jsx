import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-dvh flex-col justify-center items-center gap-6 bg-primary-content text-center px-4">
      <p className="text-3xl font-bold uppercase tracking-[0.12em] text-base-content/70 md:text-5xl italic">
        not found
      </p>
      <Link to="/" className="btn btn-primary">
        Torna alla home
      </Link>
    </div>
  );
}

export default NotFound;
