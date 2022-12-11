import AddProductForm from "../AddProductForm";
import ProductsContainer from "../ProductsContainer";
import Basket from "../Basket";


function App() {
  return (
    <div className="App">
      <AddProductForm/>
      <ProductsContainer/>
      <p>Basket: </p>
      <Basket/>
    </div>
  );
}

export default App;
