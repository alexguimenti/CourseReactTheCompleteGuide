import React from 'react';

const UserOutput = props => {


	const style = {
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
	}

	return (
		<div style={style} >
			<p >Username: {props.userName}</p>
		</div>
	)

}

export default UserOutput;