import React from "react";

const OldReels = () => {
  return (
    <div className=" grid grid-flow-row grid-cols-2 sm:grid-cols-3 mt-4 sm:gap-5 gap-2">
      <div className="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <video controls>
          <source className="w-full" src="./videos/1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <video controls>
          <source className="w-full" src="./videos/1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <video controls>
          <source className="w-full" src="./videos/1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default OldReels;
