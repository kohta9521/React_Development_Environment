import './App.css';
import Header from './components/Header';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">

        <Header />

        <HomePage />
        <BlogPage />
      </div>
  );
}

export default App;
