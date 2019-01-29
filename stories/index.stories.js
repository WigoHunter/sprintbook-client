import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import { Button, Welcome } from '@storybook/react/demo';

import Sprint from '../components/Sprint';
import "antd/dist/antd.css"

/*
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
*/

addDecorator(
  withBackgrounds([
    { name: 'gray-background', value: '#F2F2F2' }
  ])
);

// USER, SPRINT, COMMENT, TODO, STORY
const testUser = {
  name: 'Kevin hsu',
  pic: 'https://miro.medium.com/fit/c/240/240/1*3FMwtLdUvgp9CG5NzTTUEw.jpeg',
  id: 'kevin', // link: 'thesprintbook.com/@kevin'
};

const testSprint = {
  sprint: "Building a goal-driven social network, where users can post what they have been working on and follow that of their friends'.",
  createdAt: new Date(),
  likes: ['alice', 'william'],
  comments: [{ 
    name: 'alice',
    comment: 'Sign me up for the beta testing!'
  }],
  todos: [{
    todo: 'Design the database schema',
    finished: true
  }, {
    todo: 'Build the frontend skeleton',
    finished: false,
  }, {
    todo: 'Build the GraphQL backend',
    finished: false
  }],
  stories: [{
    story: 'THIS is actually so much more complicated than I first thought...'
  }]
};

storiesOf('Sprint', module)
    .add('New Sprint', () => <Sprint user={testUser} sprint={testSprint} />);
  
