import React from 'react';
import Meta from '../components/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
	NProgress.start();
}

Router.onRouteChangeComplete = () => {
	NProgress.done();
}

Router.onRouteChangeError = () => {
	console.log("Router: Error occurred");
	NProgress.done();
}

const theme = {
	white: '#FFF',
};

injectGlobal`
	html {
		box-sizing: border-box;
	}

	*, *:bofore, *:after {
		box-sizing: inherit;
	}

	body {
		padding: 0;
		margin: 0;
	}
`;

const StyledPage = styled.div`
	background: ${props => props.theme.white};
`;

class Page extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					{this.props.children}
				</StyledPage>
			</ThemeProvider>
		)
	}
}

export default Page;