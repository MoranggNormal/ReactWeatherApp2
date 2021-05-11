import React from 'react';
import './styles.css';

const CardExampleCard = ({weatherData}) => (
  <div>
    <div>
        <div className="header">{weatherData.name}</div>
    </div>
  </div>
)

export default CardExampleCard;