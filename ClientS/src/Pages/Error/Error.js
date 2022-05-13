import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Error.css';
const Error = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className='wrapper row2'>
				<div id='container' className='clear'>
					<section id='fof' className='clear'>
						<div className='hgroup'>
							<h1>
								<span>
									<strong>4</strong>
								</span>
								<span>
									<strong>0</strong>
								</span>
								<span>
									<strong>4</strong>
								</span>
							</h1>
							<h2>
								Error ! <span>Page Not Found</span>
							</h2>
						</div>

						<Button
							variant='dark'
							title='Go Back to Details... again'
							onClick={() => navigate(-1)}
						>
							Go Back
						</Button>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Error;
