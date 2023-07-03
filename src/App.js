import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./Components/DragDrop";
import Card from "./Components/Card";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {/* <DragDrop /> */}
        <Card />
      </div>
    </DndProvider>
  );
}

export default App;
