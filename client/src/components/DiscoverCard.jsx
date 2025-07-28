import '../styles/discover-card.css';

const DiscoverCard = ({ country }) => {

    return (
        <div className='discover-card-container-grid'>
            <img src={country.image} className='discover-card-img'/>
            <div className='discover-text-grid'>
                <p className='discover-country'>{country.countryCity}, {country.countryName}</p>
                <p className='discover-location'>{country.attraction}</p>
                <button className='discover-button'>Plan Now</button>
            </div>
        </div>
    );
}

export default DiscoverCard;