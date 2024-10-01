import Header from "./components/Header";
import Product from "./components/ProductInfo";

function App() {
  return (
    <>
      <Header />
      <main>
        <Product />
      </main>
      <footer className="max-w-[1200px] mx-auto text-center font-xl p-3">
        Challenge by Frontend Mentor. Coded by <a href="#none">SG</a>.
      </footer>
    </>
  );
}

export default App;
