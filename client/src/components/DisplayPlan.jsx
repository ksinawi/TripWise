import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/display-plan-page.css';

const DisplayPlan = ({ itinerary }) => {
  if (!itinerary) return null;

  return (
    <section className="itinerary-section">
      <h2 className="plan-subtitle">Your Trip Itinerary</h2>
      <div className="itinerary-content">
        <ReactMarkdown>{itinerary}</ReactMarkdown>
      </div>
    </section>
  );
};

export default DisplayPlan;
