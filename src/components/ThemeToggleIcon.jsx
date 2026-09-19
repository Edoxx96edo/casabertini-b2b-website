import React from "react";

function ThemeToggleIcon({ toggleTheme, theme }) {
  const isLuxury = theme === "luxury";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-base-content/10 bg-base-100/70 text-base-content shadow-sm backdrop-blur-sm hover:border-primary hover:bg-primary hover:text-primary-content"
      aria-label={isLuxury ? "Use light theme" : "Use luxury theme"}
      title={isLuxury ? "Use light theme" : "Use luxury theme"}
    >
      {isLuxury ? (
        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
        </svg>
      ) : (
        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12,4a1,1,0,0,1-1-1V2a1,1,0,0,1,2,0V3A1,1,0,0,1,12,4Zm0,18a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22ZM4.22,5.64a1,1,0,0,1,1.42,0l.71.71A1,1,0,1,1,4.93,7.76l-.71-.71A1,1,0,0,1,4.22,5.64ZM17.66,19.07a1,1,0,0,1,1.42,0l.71.71a1,1,0,0,1-1.42,1.42l-.71-.71A1,1,0,0,1,17.66,19.07ZM3,13H2a1,1,0,0,1,0-2H3a1,1,0,0,1,0,2Zm19,0H21a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2ZM4.93,19.07a1,1,0,0,1,1.4,1.42l-.71.71A1,1,0,0,1,4.22,19.78Zm14.14-14.14a1,1,0,0,1,0-1.42l.71-.71A1,1,0,0,1,21.2,4.22l-.71.71A1,1,0,0,1,19.07,4.93ZM12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggleIcon;
