import React, { useState, useEffect } from 'react';

const Profile = () => {
  const colors = ['red', 'blue', 'green', 'yellow'];
  const [selectedColor, setSelectedColor] = useState(null);
  const [timer, setTimer] = useState(0);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    console.log(`Clicked ${color}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-black">
      <div className="timer">{timer} seconds</div>
      <div className="circle">
        <div className="game-title">Color Wheel Game</div>
        <div className="quadrant-container">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`quadrant ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;





// import React, { useState } from 'react';

// const Profile = () => {
//   const colors = ['red', 'blue', 'green', 'yellow'];
//   const [selectedColor, setSelectedColor] = useState(null);

//   const handleColorClick = (color) => {
//     if (selectedColor === color) {
//       setSelectedColor(null);
//     } else {
//       setSelectedColor(color);
//     }
//     console.log(`Clicked ${color}`);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-900 to-black">
//       <div className="circle rotate">
//         <div className="game-title">Color Wheel Game</div>
//         <div className="quadrant-container">
//           {colors.map((color, index) => (
//             <div
//               key={index}
//               className={`quadrant ${selectedColor === color ? 'selected' : ''}`}
//               style={{ backgroundColor: color }}
//               onClick={() => handleColorClick(color)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


