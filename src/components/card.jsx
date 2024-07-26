import React from 'react';

const Card = ({ title, items }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <div className="grid">
        {items.map(item => (
          <div key={item.name} className="card">
            <img src={item.svg} alt={`${item.name} icon`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
