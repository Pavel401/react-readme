import React,{ useEffect, useState } from 'react';

const Sidebar = () => {
  const buttons = [
    { label: 'Header',index:0},
    { label: 'Badges', index:1 },
    { label: 'About this project', index:2 },
    { label: 'Built With',index:3},
    { label: 'Getting Started', index:4 },
    { label: 'Usage', index:5 },
    { label: 'RoadMap', index:6 },
    { label: 'Contributing', index:7 },
    { label: 'License', index:8},
    { label: 'Authors', index:9},
    { label: 'Acknowledgements', index:10},

  ];
    
 const [globalIndex, setIndex] = useState();

 const handleButtonClick = (buttonIndex) => {
   setIndex(buttonIndex);


 };

 useEffect(() => {
  console.log(globalIndex);
 }, [globalIndex]);
 return (
    <div className="bg-white  w-64 py-8 px-4">
      <div className="flex flex-col space-y-4">
        <label>
        <span class="font-bold  text-black -webkit-text-stroke-2">Sections</span>
        </label>
        {buttons.map((button) => (
          
      

          <button class="h-12 border-black border-2 p-2.5 bg-[#918efa] hover:bg-[#918efa] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#918efa]"             onClick={() => handleButtonClick(button.index)}
          >
                { button.label}     
                  

        </button>

        ))}
      </div>
    </div>
  );
};

export default Sidebar;
