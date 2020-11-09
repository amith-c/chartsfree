import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {

    useEffect(() => {
        document.title = 'Chart Maker';
    }, []);

    return (
        <React.Fragment>
            <div className="page">
                <div className="heading">Chart Maker</div>
                <div className="body">
                    There you go - a free chart maker that finally lets you make attractive data visualizations for free!
                </div>
                <button className="button">Get Started</button>
            </div>
        </React.Fragment>
    )
}

export default Home;