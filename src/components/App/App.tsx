import Canvas from "../Canvas";
import Box from "../Box";
import "./App.css";

function App() {
	return <Canvas>
		<Box />
		<Box position={{ x: -1 }}/>
		<Box position={{ x: 1 }}/>
	</Canvas>;
}

export default App;
