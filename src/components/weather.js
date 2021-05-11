import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'


const element = <FontAwesomeIcon icon={faSyncAlt} />

const refresh = () => {
    window.location.reload();
  }

const CardExampleCard = ({weatherData}) => (
    <>
    <button className="button" role="Reload city status" onClick={refresh}>{element}</button>
    <section className="sec-one">
        <h4>{moment().format('dddd')}</h4>
        <h1 className="header temp-two">{weatherData.name}</h1>
        <h5>{moment().format('LL')}</h5>
        
    </section>
    <header className="header-one">
    <h1 className="header temp-one">{weatherData.name}</h1>
        <h6 className="temp-one">Temperatura: {weatherData.main.temp} &deg;C</h6>
    </header>
    <section className='sec-two'>
    <h3>Tempo: {weatherData.weather[0].main}</h3>
    <h6 className="temp-two">Temperatura: {weatherData.main.temp} &deg;C</h6>
    <h3>Humidade: {weatherData.main.humidity} %</h3>
    </section>
  </>
)

export default CardExampleCard;