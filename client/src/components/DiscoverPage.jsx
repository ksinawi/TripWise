import '../styles/discover-page.css';
import DiscoverCard from './DiscoverCard';

import { countries } from '../utils/countries.js';

const DiscoverPage = () => {

    return (
        <section id='discover' className='discover-section'>
            <p className='section-title'>Discover The World</p>
            <div className='section-grid'>
                <div className='card-grid'>
                    {countries.map((country, index) => (
                        <DiscoverCard key={index} country={country}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DiscoverPage;