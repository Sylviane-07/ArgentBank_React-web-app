import React from 'react'
//Styles
import styles from './Homepage.module.css'
//components
import Banner from '../../components/Banner/Banner';
import Features from "../../layouts/Features/Features"

function Homepage() {
    return (
        <>
        <Banner/>
        <Features/>
        </>
    );
}

export default Homepage
