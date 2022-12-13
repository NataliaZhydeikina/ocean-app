import Canvas from "../Canvas";
import Box from "../Box";
import Plane from "../Plane";
import "./App.css";

function App() {
	return <Canvas>
		<Plane />
		<Box position={{ x: -1 }}/>
		<Box position={{ x: 1 }}/>
	</Canvas>;
}

export default App;
