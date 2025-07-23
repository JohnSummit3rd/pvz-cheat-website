import {
	Routes,
	Route
} from 'react-router-dom'

import Homepage from './components/Homepage';
import CheatEngine from './components/CheatEngine';
import PythonTool from './components/PythonTool';
import SecurityReflections from './components/SecurityReflections';

function Pages() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage/>} />
				<Route path="/cheatengine" element={<CheatEngine/>} />
				<Route path="/pythontool" element={<PythonTool/>} />
				<Route path="/reflections" element={<SecurityReflections/>} />
			</Routes>
		</>
	)
}

export default Pages;