import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ContactModal} from './ContactModal';

const meta: Meta<typeof ContactModal> = {
  component: ContactModal,
};

export default meta;

type Story = StoryObj<typeof ContactModal>;

export const Basic: Story = {args: {}};
