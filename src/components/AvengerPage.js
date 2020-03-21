import React from 'react';
import { avengers } from './avengersData';

const avengerData = avengers;

function Movies(props) {
    return (
        props.movieList.map(movie => {
            return <li>{movie}</li>
        })
    )
}

function AvengerPage(props) {
    const avenger = avengerData.find(avenger => props.match.params.id === `${avenger.id}`);
    return (
        <div className='character-info-wrapper'>
            <h1>{avenger.name}</h1>
            <img className='character-image' src={avenger.img} alt={avenger.name}></img>
            <p><b>Nickname:</b> {avenger.nickname}</p>
            <p><b>Description:</b> {avenger.description}</p>
            <p><b>Movies:</b></p>
            <Movies movieList={avenger.movies}/>
        </div>
    )
    // return <h1>Avenger Page</h1>
    // console.log('Avengers Data: ', avengerData);
    // return null
}

export default AvengerPage;