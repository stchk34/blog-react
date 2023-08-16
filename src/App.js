import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Title from './routes/blocks/Title';


// Css
import '../src/style/css/style.css';

export default () => (
    <Router>
        <Title/>
    </Router>
);