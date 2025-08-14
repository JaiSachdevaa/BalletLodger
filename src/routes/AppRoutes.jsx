import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Bulletin from '../pages/Bulletin';
import SubmitApplication from '../pages/SubmitApplication';
import CastVote from '../pages/CastVote';
import ProfileSelection from '../components/ProfileSelection';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/bulletin" element={<Bulletin />} />
      <Route path="/submit-application" element={<SubmitApplication />} />
      <Route path="/cast-vote" element={<CastVote />} />
      <Route path="/" element={<ProfileSelection />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}