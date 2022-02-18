import React from 'react'

// eslint-disable-next-line no-unused-vars
import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from './container';
import {Navbar} from './components';

const App =() => (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
    </div>
);

export default App;