import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CastVote.css';

const candidateData = {
  President: [
    { id: 1, name: "Jai Sachdeva", party: "Visionary Youth Party" },
    { id: 2, name: "Eshanya Padial", party: "Unity Alliance" }
  ],
  Secretary: [
    { id: 3, name: "Prisha Dureja", party: "Progress Front" },
    { id: 4, name: "Tanmay Kaushik", party: "Student Voice Party" }
  ]
};

export default function CastVote() {
  const [step, setStep] = useState(1);
  const [voterId, setVoterId] = useState('');
  const [selectedCandidates, setSelectedCandidates] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleCandidateSelect = (position, candidateId) => {
    setSelectedCandidates(prev => ({
      ...prev,
      [position]: candidateId
    }));
  };

  const isVoteReady = Object.keys(candidateData).every(
    pos => selectedCandidates[pos]
  );

  const handleSubmitVote = () => {
    if (!isVoteReady) {
      alert('Please select a candidate for each position');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1000);
  };

  return (
    <div className="cast-vote-container">
      {step === 1 && (
        <div className="voter-id-step">
          <h2>Voter Verification</h2>
          <input
            type="text"
            value={voterId}
            onChange={e => setVoterId(e.target.value)}
            placeholder="Enter Voter ID"
          />
          <br />
          <button
            className="submit-vote-btn"
            onClick={() => setStep(2)}
            disabled={!voterId.trim()}
          >
            Verify
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="candidate-selection">
          <h2>Select Your Candidates</h2>

          {Object.entries(candidateData).map(([position, candidates]) => (
            <div className="position-group" key={position}>
              <h3>{position}</h3>
              <div className="candidates-list">
                {candidates.map(candidate => (
                  <div
                    key={candidate.id}
                    className={`candidate-card ${
                      selectedCandidates[position] === candidate.id
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() => handleCandidateSelect(position, candidate.id)}
                  >
                    <div className="candidate-info">
                      <h4>{candidate.name}</h4>
                      <p>{candidate.party}</p>
                    </div>
                    <div className="radio-indicator"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            className="submit-vote-btn"
            disabled={!isVoteReady || isSubmitting}
            onClick={handleSubmitVote}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Vote'}
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="vote-success">
          <div className="success-icon">✔️</div>
          <h2>Vote Submitted</h2>
          <p>Thank you for voting in the campus election!</p>
          <button className="submit-vote-btn" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}