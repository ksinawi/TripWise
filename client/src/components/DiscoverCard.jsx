import { Link } from 'react-router-dom';
import '../styles/discover-card.css';

const DiscoverCard = ({ country }) => {

    return (
        <div className='discover-card-container-grid'>
            <img src={country.image} className='discover-card-img'/>
            <div className='discover-text-grid'>
                <p className='discover-country'>{country.countryCity}, {country.countryName}</p>
                <p className='discover-location'>{country.attraction}</p>
                <Link to={'/plan'}>
                    <button className='discover-button'>Plan Now</button>
                </Link>
            </div>
        </div>
    );
}

export default DiscoverCard;