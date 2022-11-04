import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Welcome() {
	let navigate = useNavigate();

	return (
		<>
			<div>
				<h1>Welcome</h1>
				<p>User</p>
			</div>
			<div>
				<Button
					variant='contained'
					onClick={() => {
						navigate('/learn');
					}}
				>
					Learn
				</Button>
				<Button
					variant='contained'
					onClick={() => {
						navigate('/quizz');
					}}
				>
					Quizz
				</Button>
			</div>
		</>
	);
}
export default Welcome;
