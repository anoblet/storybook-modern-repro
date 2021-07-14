import { html } from 'lit-html';
import '../../sample-package/src/components/sample-layout';
import { SampleHeaderStory } from './sample-header.stories';

export default {
  title: 'Sample Layout',
};

const Template = () => html`
  ${SampleHeaderStory()}
  <sample-layout></sample-layout>
`;

export const SampleLayoutStory = Template.bind({});
