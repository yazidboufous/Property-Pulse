import React from "react";

const InfoBox = ({
  heading,
  BackgroundColor = "bg-gray-100",
  textColor = "text-gray",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${BackgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.BackgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-800`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
