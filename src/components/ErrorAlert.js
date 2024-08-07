import React from "react";

const ErrorAlert = ({ message, onDismiss }) => {
  return (
    <div
      className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-28 left-10"
      role="alert">
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline">{message}</span>
      <button
        className="absolute top-0 bottom-0 right-0  px-4 py-3"
        onClick={onDismiss}>
        <svg
          className="fill-current h-6 w-6 ml-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M15.06 5.36a1 1 0 011.41 1.41L11.41 12l4.06 4.06a1 1 0 01-1.41 1.41L10 13.41l-4.06 4.06a1 1 0 01-1.41-1.41L8.59 12 4.53 7.94a1 1 0 111.41-1.41L10 10.59l4.06-4.06a1 1 0 011.41 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ErrorAlert;
