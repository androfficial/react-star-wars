import React from 'react';

const People = ({ people }) => {
  return (
    <ul className="list">
      {people.map(({ id, name, img }) => (
        <li key={`${id}_${name}`} className="item">
          <img src={img} alt={name} />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default People;