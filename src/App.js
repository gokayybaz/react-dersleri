// import ProductCard from "./components/ProductCard";

import ClassComponentExample from "./components/ClassComponentExample";
import CollapseComponent from "./components/Collapse";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      {/* <ProductCard title="Apple IMac" formFactor="AIO" />
      <ProductCard title="Apple Macbook Air" formFactor="Laptop" />
      <ProductCard title="Apple Macbook Pro" formFactor="Laptop" />
      <ProductCard title="Apple Mac Mini" formFactor="Desktop" />
      <ProductCard title="Apple Mac Studio" formFactor="Desktop" />
      <ProductCard title="Apple Mac Pro" formFactor="Desktop" /> */}
      {/* <CollapseComponent buttonTitle="Fiyat Performans">
        <ProductCard title="Apple Macbook Air" formFactor="Laptop" />
      </CollapseComponent>
      <CollapseComponent buttonTitle="Profesyoneller İçin">
        <ProductCard title="Apple Macbook Pro" formFactor="Laptop" />
      </CollapseComponent> */}
      <ClassComponentExample name="Gökay" />
    </div>
  );
}

export default App;
