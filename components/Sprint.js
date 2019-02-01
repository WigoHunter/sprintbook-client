import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const SprintDiv = styled.div`
	.main {
		width: 480px;
		height: 200px;
		background: #FFF;
		box-sizing: border-box;
		box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		padding: 18px 20px;
		display: flex;
		flex-direction: column;

		p {
			margin: 0;
		}

		.content {
			margin-bottom: auto;
			display: flex;
			flex-direction: column;

			.user {
				display: flex;
				flex-direction: row;
				align-items: center;

				.pic {
					border-radius: 50%;
					margin-right: 18px;
				}

				.right {
					display: flex;
					flex-direction: column;
					justify-content: center;

					p {
						font-size: 16px;
						cursor: pointer;
						color: rgba(0, 0, 0, .7);
						position: relative;
						top: 2px;
					}

					span {
						font-size: 12px;
						color: rgba(0, 0, 0, .4);
					}
				}
			}

			.sprint {
				margin-top: 20px;
			}

			.interactions {
				margin-top: 10px;
				display: flex;
				flex-direction: row;
				align-items: center;

				& .liked {
					color: #EF618A;
				}

				& > div {
					display: flex;
					flex-direction: row;
					align-items: center;
					
					&:first-child {
						margin-right: 14px;
					}

					& i {
						cursor: pointer;
						transition: all 0.3s ease;
						
						&:hover {
							transform: scale(1.1);
						}
					}

					& span {
						margin-left: 5px;
						font-size: 14px;
						opacity: 0.6;
					}
				}
			}
		}
	}

	.extras {
		visibility: hidden;
		transition: 0.3s all ease;

		&.open {
			visibility: visible;
		}
	}
`;

const Toggler = styled.div`
	display: block;
	position: relative;
	width: 45px;
	margin-top: auto;
	align-self: center;
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	span {
		display: block;
		width: 30px;
		height: 1px;
		margin: 1.5px 0;
		background: rgba(0, 0, 0, .35);
	}

	&:hover {
		transform: scale(1.2);
		opacity: 0.6;
	}
`;

class Sprint extends React.Component {
	state = {
		open: false,
		liked: false,
	}

	toggleLike = () => {
		this.setState({
			liked: !this.state.liked
		});
	}

	toggleOpen = () => {
		this.setState({
			open: !this.state.open
		});
	}

	render() {
		const { user, sprint } = this.props;
		const { open, liked } = this.state;

		return (
			<SprintDiv>
				<div className="main">
					<div className="content">
						<div className="user">
							<div className="pic" style={{ background: `url(${user.pic})`, backgroundSize: 'cover', width: '48px', height: '48px'  }} />
							<div className="right">
								<p>{user.name}</p>
								<span>{`${sprint.createdAt.getFullYear()} / ${sprint.createdAt.getMonth() + 1} / ${sprint.createdAt.getDate()}`}</span>
							</div>
						</div>
						<div className="sprint">
							<p>{sprint.sprint}</p>
						</div>
						<div className="interactions">
							<div>
								<Icon type="heart" theme={liked ? "filled" : "outlined"} className={`${liked && "liked"}`} onClick={() => this.toggleLike()} />
								<span>{sprint.likes.length}</span>
							</div>
							<div>
								<Icon type="message" />
								<span>{sprint.comments.length}</span>
							</div>
						</div>
					</div>
					
					<Toggler onClick={() => this.toggleOpen()}>
						<span />
						<span />
						<span />
					</Toggler>
				</div>

				<div className={`extras ${open && "open"}`}>
					<p>hello world</p>
				</div>
			</SprintDiv>
		);
	}
}

export default Sprint;