import { Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "./modules/Container/Container";
import Header from "./modules/Header/Header";
import Main from "./modules/Main";
import INMPage from "./pages/INMPage";
import QuestionsType from "./modules/QuestionsType/QuestionsType";
import QuestionsList from "./modules/QuestionsList/QuestionsList";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/Exam-practice-app" element={<Main />}></Route>
          <Route path="/Exam-practice-app/:exam" element={<INMPage />}></Route>
          <Route
            path="/Exam-practice-app/:exam/:year"
            element={<QuestionsType />}
          >
            <Route path=":type" element={<QuestionsList />}></Route>
          </Route>
          <Route
            path="/Exam-practice-app/About"
            element={<AboutPage />}
          ></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
