// import Form from "./components/1-forms/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import FormObject from "./components/1-forms/FormObject";
import KeyboardEvents from "./components/2-keyboardClipboardEvents/KeyboardClipboard";
import MouseEvent from "./components/3-mouseEvents/MouseEvent";

function App() {
  return (
    <div className="container mt-4 text-center">
      {/* <Form /> */}
      {/* <FormObject /> */}
      {/* <KeyboardEvents /> */}
      <MouseEvent />
    </div>
  );
}

export default App;
