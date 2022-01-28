import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TicketApplication from './pages/TicketApplication';
import TicketQuery from './pages/TicketQuery';
import TicketAnswer from './pages/TicketAnswer';
import TicketSuccess from './pages/TicketSuccess';
import AdminLogin from './pages/AdminLogin';
import AdminTicketList from './pages/AdminTicketList';
import AdminTicketAnswer from './pages/AdminTicketAnswer';
import RequireAuth from './components/auth';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/basvuru-sorgula" element={<TicketQuery/>} />
        <Route path="/basvuru/:id" element={<TicketAnswer/>} />
        <Route path="/basvuru-basarili" element={<TicketSuccess/>} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route element={<RequireAuth />}>
        <Route path="/admin/basvuru-listesi" element={<AdminTicketList/>} />
        <Route path="/admin/basvuru/:id" element={<AdminTicketAnswer/>} />
        </Route>
        <Route path="/" element={<TicketApplication/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
