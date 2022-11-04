import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Topbar() {
	let navigate = useNavigate();

	return (
		<div>
			<Button
				variant='contained'
				onClick={() => {
					navigate(-1);
				}}
			>
				Back
			</Button>
		</div>
	);
}
export default Topbar;
