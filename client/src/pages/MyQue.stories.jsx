import React from 'react';
import MyQue from './MyQue';

export default {
  component: MyQue,
  title: 'MyQue',
  parameters: {
    state: {
      que: [],
    },
  },
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <MyQue {...args} />
);

export const Empty = Template.bind({});

export const NotEmpty = Template.bind({});
NotEmpty.parameters = {
  state: {
    que: [
      {
        queId: '49891e84-63a5-4c7b-9200-0c1e65393572',
        queName: 'QueueI',
        queCreationTimestamp: '2021-02-14T04:28:59.776+0000',
      },
      {
        queId: 'cef39fc3-f947-450b-ad69-0e18dc406653',
        queName: 'QueueII',
        queCreationTimestamp: '2021-02-14T08:47:29.988+0000',
      },
      {
        queId: '7121848f-023b-482a-9b9c-f7e7cd7b8904',
        queName: 'QueueIII',
        queCreationTimestamp: '2021-02-14T11:50:09.218+0000',
      },
    ],
  },
};