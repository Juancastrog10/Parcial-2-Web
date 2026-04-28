import { Link, Route, Routes } from "react-router-dom";
import { SpacesPage } from "./pages/Spacespages";
import { ReservationsPage } from "./pages/ReservationsPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Espacios</Link>
        <Link to="/reservations">Reservas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SpacesPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </div>
  );
}

export default App;