import React from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import RenderSprints from '../components/RenderSprints';

const ALL_SPRINT_QUERY = gql`
	query ALL_SPRINT_QUERY {
		sprints {
			id
			title
			description
		}
	}
`;

const Home = props => (
	<div>
		<Link href="/try">
			<a>Try</a>
		</Link>
		<p>Hey!</p>
		<Query query={ALL_SPRINT_QUERY}>
			{({ data, error, loading }) => {
				if (loading) return <p>Loading...</p>
				if (error) return <p>Oops... There's an error.</p>
				return <RenderSprints sprints={data.sprints} />
			}}
		</Query>
	</div>
);

export default Home;
export { ALL_SPRINT_QUERY };