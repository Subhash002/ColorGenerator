import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import values from "values.js";
import { toast } from "react-toastify";
const App = () => {
  const [colors, setColors] = useState(new values("#f15025").all(10));

  //
  const addColor = (color) => {
    try {
      const newColors = new values(color).all(10);
      setColors(newColors);
      toast.success("Color grid updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  // console.log(new values("#f15025").all(10));
  return (
    <main>
      <Form addColor={addColor}></Form>
      <ColorList colors={colors}></ColorList>
    </main>
  );
};
export default App;
