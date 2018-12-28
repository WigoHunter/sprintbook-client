import React from 'react';
import Link from 'next/link';
import CreateSprint from '../components/CreateSprint';

const Try = props => (
	<div>
		<Link href="/">
			<a>Home</a>
		</Link>
		<CreateSprint />
	</div>
);

export default Try;