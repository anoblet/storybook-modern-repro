import { html } from 'lit-html';
import '../../sample-package/src/components/sample-header';

export default {
  title: 'Sample Header',
};

const Template = () => html` <sample-header></sample-header> `;

export const SampleHeaderStory = Template.bind({});
