import React from 'react'
import Carousel from '../Carousel/Carousel'

import Support from '../Support/Support'
import Timer from '../Timer/Timer'
import Faq from '../Faq/Faq'

import './Home.css'
import OurTeam from '../OurTeam/OurTeam'

const Home = () => {
    return (
        <section class="home">
            
            <Carousel />
            <Timer />
           
            <Support />
            {/* <Faq />
            <OurTeam /> */}

        </section>
    )
}

export default Home
