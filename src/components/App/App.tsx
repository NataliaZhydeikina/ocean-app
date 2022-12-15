import Canvas from "../Canvas";
import Sphere from "../Sphere";
import "./App.css";

function App() {
	return <Canvas>
		<Sphere rotation={[0,0,0]} size={[0.3,0.3]} />
	</Canvas>;
}

export default App;
