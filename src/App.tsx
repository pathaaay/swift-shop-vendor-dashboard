import { Toaster } from "react-hot-toast";
import { AddProductForm } from "./components/add-product-form";
import { Navbar } from "./components/navbar";

function App() {
  return (
    // when we want two html tags parallel in JSX then React fragments is used.
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="">02</div>
        <div className="">
          <AddProductForm />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
