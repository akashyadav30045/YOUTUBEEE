import React from 'react';

const Buttons = ({name}) => {
  return (
    <div className="flex px-5 py-2 m-2 bg-gray-200 rounded-lg cursor-pointer">
        {name}
    </div>
  );
};

export default Buttons;
