import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Router from 'next/router';
import { ALL_SPRINT_QUERY } from '../pages/index';

const Form = styled.form`
	fieldset {
		display: flex;
		flex-direction: column;

		label {
			display: flex;
			flex-direction: column;
		}
	}
`;

const CREATE_SPRINT_MUTATION = gql`
	mutation CREATE_SPRINT_MUTATION(
		$title: String!
		$description: String!
	 ) {
		createSprint(
			title: $title
			description: $description
		) {
			id
			title
			description
		}
	}
`;

class CreateSprint extends React.Component {
	state = {
		title: '',
		description: '',
	};

	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({
			[name]: val
		});
	}

	render() {
		return (
			<Mutation
				mutation={CREATE_SPRINT_MUTATION}
				variables={this.state}
			>
				{(createSprint, { loading, error }) => (
					<Form onSubmit={async e => {
						e.preventDefault();
						const res = await createSprint();
						this.setState({
							title: '',
							description: '',
						});

						/*
						Router.push({
							pathname: '/',
							query: {
								id: something
							}
						})
						*/
					}}>
						<h2>Create a Sprint</h2>
						{error && <p>Oops... There's an error.</p>}
						<fieldset disabled={loading} aria-busy={loading}>
							<label htmlFor="title">
								Title
								<input
									type="text"
									id="title"
									name="title"
									placeholder="Title"
									value={this.state.title}
									onChange={this.handleChange}
									required
								/>
							</label>

							<label htmlFor="title">
								Description
								<textarea
									id="description"
									name="description"
									placeholder="Description"
									value={this.state.description}
									onChange={this.handleChange}
									required
								/>
							</label>

							<button type="submit">Submit</button>
						</fieldset>
					</Form>
				)}
			</Mutation>
		)
	}
}

export default CreateSprint;
