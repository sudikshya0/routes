import { Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import PlaceDetail from './routes/placeDetail';
import Places from './routes/places';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="place" element={<Places />}></Route>
      <Route path="place/:id" element={<PlaceDetail/>}></Route>
      <Route path="*" element={<div>Not found</div>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
