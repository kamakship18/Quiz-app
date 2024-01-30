import "./App.css" 
import QuizBox from './components/QuizBox';
import questions from './components/Questions';

function App() {
  return (

    <div className="App">
      <QuizBox questions={questions} />
    </div>
    
  );
}

export default App;