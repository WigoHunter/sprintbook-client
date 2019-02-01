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
	red: '#EF618A',
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
		font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		font-size: 14px;
		font-variant: tabular-nums;
		line-height: 1.5;
		color: rgba(0, 0, 0, 0.65);
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