import Canvas from "../Canvas";
import Box from "../Box";
import Plane from "../Plane";
import "./App.css";

function App() {
	return <Canvas>
		<Plane rotation={[-1,0,0]} size={[5,2]} />
	</Canvas>;
}

export default App;
