echo "Creating a story file for component $1";
echo "import React from \"react\";
import { ComponentStory, ComponentMeta } from \"@storybook/react\";

import $1 from \"./$1\";

export default {
  title: \"Palmtree/$1\",
  component: $1
} as ComponentMeta<typeof $1>;

const Template: ComponentStory<typeof $1> = (args) => <$1 {...args} />;

export const Default = Template.bind({});
Default.args = {};
" >> ./src/components/$1/$1.stories.tsx;