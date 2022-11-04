import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './modules/Welcome/Welcome';
import Learn from './modules/Learn/Learn';
import Quizz from './modules/Quizz/Quizz';
import Nomatch from './modules/Nomatch/Nomatch';

function App() {
	return (
		<div>
			<Routes>
				<Route element={<Welcome />} path='/' />
				<Route element={<Learn />} path='learn' />
				<Route element={<Quizz />} path='quizz' />
				<Route element={<Nomatch />} path='*' />
			</Routes>
		</div>
	);
}

export default App;
