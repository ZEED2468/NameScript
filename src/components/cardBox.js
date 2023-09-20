import React from 'react';

const Card = ({ name, email, username, id }) => {
  return (
    <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>Username:<em>{username}</em></p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;