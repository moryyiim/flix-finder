import React from 'react';
import SearchMovies from './searchMovies'
import './style.css'

export default function App() {
    return(
        <div className='container'>
            <h1 className='title'>Flix Finder</h1>
            <SearchMovies />
        </div>
    )
}