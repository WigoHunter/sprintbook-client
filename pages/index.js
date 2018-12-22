import React from 'react';
import Link from 'next/link';

const Home = props => (
	<div>
		<Link href="/try">
			<a>Try</a>
		</Link>
		<p>Hey!</p>
	</div>
);

export default Home;