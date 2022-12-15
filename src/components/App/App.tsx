import Canvas from "../Canvas";
import Box from "../Box";
import Plane from "../Plane";
import "./App.css";

function App() {
	return <Canvas>
		<Plane rotation={[0,0,0]} size={[1,1]} />
	</Canvas>;
}

export default App;
