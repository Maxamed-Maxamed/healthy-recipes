// src/stories/Header.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Header from '../components/Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: StoryFn = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
