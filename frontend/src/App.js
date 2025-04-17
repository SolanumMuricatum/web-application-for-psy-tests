import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импорт Router
import {AppBarComponent} from './components/elements/Appbar';
import {ThemePage} from './components/pages/ThemePage';
import {TopicPage} from './components/pages/TopicPage';
// import { FirstTestPageOne } from './components/pages/tests/1/FirstTestPageOne';
// import { SecondTestPageOne } from './components/pages/tests/1/SecondTestPageOne';
// import { ThirdTestPageOne } from './components/pages/tests/1/ThirdTestPageOne';

import { TestPage } from './components/pages/TestPage';

function App() {
  return (
    <Router>
    <div className="App">
      <AppBarComponent/> {/* Статичная шапка */}
      <Routes>
        <Route path="/web-application-for-psy-tests/" element={<ThemePage />}/>
        <Route path="/topic/:id/" element={<TopicPage />}/>
        <Route path="/test/:idTopic/:idTest/" element={<TestPage />}/>
        {/* <Route path="/topic/1/1" element={<FirstTestPageOne />}/>
        <Route path="/topic/1/2" element={<SecondTestPageOne />}/>
        <Route path="/topic/1/3" element={<ThirdTestPageOne />}/> */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
