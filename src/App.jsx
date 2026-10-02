import './App.css'
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutUs } from './components/AboutUs/AboutUs';
import { MovieCard } from './components/MovieCard/MovieCard';
import { topMovies } from './constants/top100movies';
import { MovieList } from './components/MovieList/MovieList';
import { CustomComponent } from './components/CustomComponent/CustomComponent';
import { Reviews } from './components/Reviews/Reviews';
import { TranslationContext, translations } from './context/translation/translationContext';
import { useContext, useState } from 'react';
import { ThemeContext } from './context/theme/themeContext';

function App() {  
  const [lang, setLang] = useState("en");
  const { theme } = useContext(ThemeContext);
  function changeLang() {
    setLang(prevLang => (prevLang === "en" ? "ru" : "en"))
  }
  
  const isLoggedIn = true;
  return (
      <TranslationContext.Provider value={translations[lang]}>
        <div className={`wrapper ${theme}`}>
          <Header changeLang={changeLang} lang={lang}/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movie-list/:id' element={<MovieCard movieList={topMovies}/>} />
            <Route path='/about-us' element={<AboutUs />}>
              <Route path='contacts' element={<div>Contacts</div>}/>
              <Route path='about' element={<div>Company</div>}/>
            </Route>
            <Route path='/movie-list' element={
              isLoggedIn ? 
              <MovieList movieList={topMovies}/> : <Navigate to="/custom" />} />
            <Route path='/custom' element={<CustomComponent />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='*'element={<div>Страница не существует!</div>} />
          </Routes>
          <Footer />
        </div>
      </TranslationContext.Provider>
  );
}

export default App
