import '../styles/country-card.css';

const CountryCard = ({ country, isActive }) => {

    return (
        <div className={`card-container-grid ${isActive ? 'active' : ''}`}>
            <img src={country.image} className='container-img'></img>
            <div className='container-text'>
                <p className='text-country'>{country.countryCity}, {country.countryName}</p>
                <p className='text-location'>{country.attraction}</p>
            </div>
        </div>
    );
}

export default CountryCard;