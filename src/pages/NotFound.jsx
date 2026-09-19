import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="lux-section flex min-h-[calc(100dvh-180px)] items-center justify-center py-12 text-center">
      <div className="lux-card max-w-xl rounded-[30px] border border-base-content/10 bg-base-100/75 p-8 sm:p-12">
        <p className="lux-kicker">Error 404</p>
        <h1 className="lux-heading mt-5 text-6xl sm:text-7xl">Page not found.</h1>
        <p className="mx-auto mt-5 max-w-sm text-base-content/65">The page you are looking for is not available. Return to Casa Bertini’s collection.</p>
        <Link to="/" className="lux-action mt-8">Torna alla home</Link>
      </div>
    </section>
  );
}

export default NotFound;
