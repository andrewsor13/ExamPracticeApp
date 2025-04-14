import { Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "./modules/Container/Container";
import Header from "./modules/Header/Header";
import Main from "./modules/Main";
import ExamPage from "./pages/ExamPage";
import QuestionsType from "./modules/QuestionsType/QuestionsType";
import QuestionsList from "./modules/QuestionsList/QuestionsList";
import AboutPage from "./pages/AboutPage";
import { AnsweredQuestionsProvider } from "./store/AnsweredQuestionsData";
function App() {
  return (
    <AnsweredQuestionsProvider>
      <div>
        <Header />
        <Container>
          <Routes>
            <Route path="/ExamPracticeApp" element={<Main />}></Route>
            <Route path="/ExamPracticeApp/:exam" element={<ExamPage />}></Route>
            <Route
              path="/ExamPracticeApp/:exam/:year"
              element={<QuestionsType />}
            >
              <Route path=":type" element={<QuestionsList />}></Route>
            </Route>
            <Route
              path="/ExamPracticeApp/About"
              element={<AboutPage />}
            ></Route>
          </Routes>
        </Container>
      </div>
    </AnsweredQuestionsProvider>
  );
}

export default App;
