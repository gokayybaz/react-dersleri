// Burası VirtualDOM'da root'a render edilen ilk component'dir.
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div>
      {/* <h1>Hello ReactJS</h1> */}
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

export default App;
