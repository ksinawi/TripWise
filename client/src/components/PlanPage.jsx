import '../styles/plan-page.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const PlanPage = () => {

    return (
        <section className="plan-section">
            <div className='plan-container-grid'>
                <p className='plan-title'>Plan</p>
                <div className='plan-form'>
                    <GooglePlacesAutocomplete />
                    <p className='plan-text'>Destination</p>
                    <input type='text' className='plan-input' placeholder='Rome, Italy...'/>
                    <p className='plan-text'>Number of Days</p>
                    <input type='number' className='plan-input' min={1} placeholder='1...'/>
                    <p className='plan-text'>Budget</p>
                    <input type='text' className='plan-input' placeholder='$1000...'/>
                    <p className='plan-text'>Number of Travels</p>
                    <input type='number' className='plan-input' min={1} placeholder='1...'/>
                </div>
                <button className='plan-button'>Plan Now</button>
            </div>
        </section>
    )
}

export default PlanPage;