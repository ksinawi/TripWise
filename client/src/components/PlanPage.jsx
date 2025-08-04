import '../styles/plan-page.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import React, { useState } from 'react';
import DisplayPlan from './DisplayPlan';

const PlanPage = () => {
  const [destination, setDestination] = useState(null);
  const [length, setLength] = useState(1);
  const [budget, setBudget] = useState(100);
  const [travellers, setTravellers] = useState(1);

  const [itinerary, setItinerary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!destination || !length || !budget || !travellers) {
        console.log('Error');
        return;
    }

    setLoading(true);

    const destinationName = destination.label;

    const res = await fetch('http://localhost:5001/api/plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        destinationName,
        length,
        budget,
        travellers,
      }),
    });

    const data = await res.json();
  
    if (data.itinerary) {
      setItinerary(data.itinerary);
    } 

  };

  return (
    <section className="plan-section">
      <div className="plan-container-grid">
        <p className="plan-title">Plan</p>
        <form className="plan-form" onSubmit={handleSubmit}>
          <label className="plan-text">Destination</label>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: destination,
              onChange: setDestination,
              placeholder: 'Rome, Italy...',
              styles: {
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isFocused ? '#eee' : '#fff',
                  color: 'black',
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'black',
                }),
              },
            }}
          />

          <label className="plan-text">Number of Days</label>
          <input
            type="number"
            className="plan-input"
            min={1}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            placeholder="1..."
          />

          <label className="plan-text">Budget</label>
          <input
            type="number"
            className="plan-input"
            min={100}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            placeholder="$100..."
          />

          <label className="plan-text">Number of Travellers</label>
          <input
            type="number"
            className="plan-input"
            min={1}
            value={travellers}
            onChange={(e) => setTravellers(Number(e.target.value))}
            placeholder="1..."
          />

          <button className="plan-button" type="submit" disabled={loading}>
           {loading ? 'Loading...' : 'Plan Now'}
          </button>
        </form>
        <DisplayPlan itinerary={itinerary} />
      </div>
    </section>
  );
};

export default PlanPage;
