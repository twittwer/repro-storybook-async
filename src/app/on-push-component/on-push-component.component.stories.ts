import { text } from '@storybook/addon-knobs';
import { OnPushComponentComponent } from './on-push-component.component';

export default {
  title: 'OnPushComponentComponent',
  component: OnPushComponentComponent,
};

export const WithKnobs = () => ({
  component: OnPushComponentComponent,
  props: {
    message: text('message', 'Hello World'),
  },
});

export const WithoutKnobs = () => ({
  component: OnPushComponentComponent,
  props: {
    message: 'Hello World',
  },
});
