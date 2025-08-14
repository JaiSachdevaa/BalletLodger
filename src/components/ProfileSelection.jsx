import { useNavigate } from 'react-router-dom';
import '../styles/ProfileSelection.css';

const profiles = [
  {
    id: 1,
    title: "General Bulletin",
    icon: "📋",
    path: "/bulletin"
  },
  {
    id: 2,
    title: "Submit Application",
    icon: "📝",
    path: "/submit-application"
  },
  {
    id: 3,
    title: "Cast Vote",
    icon: "🗳️",
    path: "/cast-vote"
  }
];

export default function ProfileSelection() {
  const navigate = useNavigate();

  return (
    <div className="profile-selection">
      <h1>Welcome to BalletLodger</h1>
      <h2>Select your action:</h2>

      <div className="profiles-container">
        {profiles.map(profile => (
          <div 
            key={profile.id}
            className="profile-card"
            onClick={() => navigate(profile.path)}
          >
            <div className="profile-icon">{profile.icon}</div>
            <h3>{profile.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}