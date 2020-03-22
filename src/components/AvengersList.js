import React from 'react';
import { avengers } from './avengersData';
import { Link } from 'react-router-dom';

function Roster() {
    return (
        avengers.map(avenger => {
            return (
                <div key={avenger.id} className='character-card'>
                    <Link to={`/avengers/${avenger.id}`}>
                        <img className='charImg' src={avenger.thumbnail} alt={avenger.name}></img>
                    </Link>
                    <Link to={`/avengers/${avenger.id}`}>
                        <h3>{avenger.name}</h3>
                    </Link>
                </div>
            )
        })
    )
}

function AvengerList() {
    // console.log(avengers);
    return (
        <>
            <h1>Avenger List</h1>
            <div  className='characters-list-wrapper'>
                <Roster />
            </div>
        </>
    );
}

export default AvengerList;