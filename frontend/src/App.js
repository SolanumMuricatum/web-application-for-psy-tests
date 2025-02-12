import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импорт Router
import {AppBarComponent} from './components/elements/Appbar';
import {MainPage} from './components/pages/MainPage';
import {TopicPage} from './components/pages/TopicPage';
import { FirstTestPageOne } from './components/pages/tests/1/FirstTestPageOne';
import { SecondTestPageOne } from './components/pages/tests/1/SecondTestPageOne';
import { ThirdTestPageOne } from './components/pages/tests/1/ThirdTestPageOne';

function App() {
  return (
    <Router>
    <div className="App">
      <AppBarComponent/> {/* Статичная шапка */}
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/topic/:id" element={<TopicPage />}/>
        <Route path="/topic/1/1" element={<FirstTestPageOne />}/>
        <Route path="/topic/1/2" element={<SecondTestPageOne />}/>
        <Route path="/topic/1/3" element={<ThirdTestPageOne />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
