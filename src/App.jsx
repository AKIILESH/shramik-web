import React, { useState } from 'react';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [initialStep, setInitialStep] = useState('choose');
  const [language, setLanguage] = useState('hi'); // Default is Hindi as per guidelines

  const handleNavigate = (page, step = 'choose') => {
    setCurrentPage(page);
    setInitialStep(step);
  };

  return (
    <div className="app-root">
      {currentPage === 'home' ? (
        <HomePage 
          onNavigate={handleNavigate} 
          language={language} 
          onLanguageChange={setLanguage} 
        />
      ) : (
        <SignUpPage 
          onNavigate={handleNavigate} 
          initialStep={initialStep} 
          language={language} 
          onLanguageChange={setLanguage} 
        />
      )}
    </div>
  );
}

export default App;
