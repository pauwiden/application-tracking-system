import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import RecruitmentBoard from "./components/recruitmentBoard/recruitmentBoard";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">

        <DndProvider backend={HTML5Backend}>
        <RecruitmentBoard></RecruitmentBoard>
        </DndProvider>

    </div>
  );
}

export default App;
