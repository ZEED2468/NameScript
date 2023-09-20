import React from 'react';

const SearchBox = () => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--blue bg-lightest-white'
        type='search'
        placeholder='Search robots'
  
      />
    </div>
  );
}

export default SearchBox;


// import React, { useState } from 'react';

// const SearchBox = ({ searchChange }) => {
//   const [searchfield, setSearchfield] = useState('');

//   const onSearchChange = (event) => {
//     setSearchfield(event.target.value);
//     searchChange(event.target.value);
//   };

//   return (
//     <div className='pa2'>
//       <input
//         className='pa3 ba b--blue bg-lightest-white'
//         type='search'
//         placeholder='Search robots'
//         value={searchfield} // Bind the input value to the searchfield state
//         onChange={onSearchChange}
//       />
//     </div>
//   );
// };

// export default SearchBox;

