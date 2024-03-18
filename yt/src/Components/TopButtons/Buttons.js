import React from 'react';

const Buttons = ({name}) => {
  return (
    <div className="flex px-2 py-1 text-center m-2 bg-gray-200 rounded-lg cursor-pointer flex-wrap">
        {name}
    </div>
  );
};

export default Buttons;
