import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импорт Router
import {AppBarComponent} from './components/elements/Appbar';
import {MainPage} from './components/pages/MainPage';
import {TopicPage} from './components/pages/TopicPage';
import { FirstPage } from '@mui/icons-material';
import { FirstTestPage } from './components/pages/tests/1/FirstTestPage';

function App() {
  return (
    <Router>
    <div className="App">
      <AppBarComponent/> {/* Статичная шапка */}
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/topic/:id" element={<TopicPage />}/>
        <Route path="/topic/:id/1" element={<FirstTestPage />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
