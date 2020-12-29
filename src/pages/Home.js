import React from 'react';
import '../App.css';
import Footer from '../Components/Footer'
import MoviesComponent from './../Containers/Movies/movies';

function Home() {
    return (
        <>
            <MoviesComponent />
            <Footer />
        </>
    )
}

export default Home;
