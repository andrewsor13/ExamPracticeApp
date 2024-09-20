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
          <Route path="/ExamPracticeApp" element={<Main />}></Route>
          <Route path="/ExamPracticeApp/:exam" element={<INMPage />}></Route>
          <Route
            path="/ExamPracticeApp/:exam/:year"
            element={<QuestionsType />}
          >
            <Route path=":type" element={<QuestionsList />}></Route>
          </Route>
          <Route path="/ExamPracticeApp/About" element={<AboutPage />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
