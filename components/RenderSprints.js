import React from 'react';

const RenderSprints = ({ sprints }) => (
	<ul>
		{sprints.map(sprint => (
			// TODO: Build Sprint component
			<li key={sprint.id}>{sprint.title}</li>
		))}
	</ul>
);

export default RenderSprints;