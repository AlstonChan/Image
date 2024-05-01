import type { Meta, StoryObj } from "@storybook/react";

import testImage1 from "./assets/assets.png";
import testImage2 from "./assets/avif-test-image.avif";
import testImage3 from "./assets/context.png";
import testImage4 from "./assets/docs.png";
import testImage5 from "./assets/share.png";
import testImage6 from "./assets/styling.png";
import testImage7 from "./assets/theming.png";

import Image from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Image",
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    src: {
      control: { type: "radio" },
      options: [
        testImage1,
        testImage2,
        testImage3,
        testImage4,
        testImage5,
        testImage6,
        testImage7,
        "image-not-found",
      ],
      description: "The source file of the image.",
    },
    alt: {
      control: { type: "text" },
      description: "The alternative text that describes the image.",
    },
    w: {
      control: { type: "text" },
      description: "The width of the image.",
    },
    h: {
      control: { type: "text" },
      description: "The height of the image",
    },
    responsive: {
      control: { type: "boolean" },
      description: "Enable image to be responsive",
    },
    className: {
      control: { type: "text" },
      description: "The CSS class for the img element",
    },
    priority: {
      control: { type: "boolean" },
      description: "Whether to fetch the image immediately or lazy load it",
    },
    // style: {
    //   control: { type: "text" },
    //   description: "Additional CSS style for the img element.",
    // },
  },
  args: {
    src: testImage1,
    alt: "This is the alternative text",
    priority: false,
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const ImgWithWidthAndHeight: Story = {
  args: {
    w: "512",
    h: "512",
  },
};

export const ImgWithWidthAndHeight_Responsive: Story = {
  args: {
    w: "512",
    h: "512",
    responsive: true,
  },
};

export const ImageNotLoading: Story = {
  args: {
    src: "image-not-found",
    responsive: false,
  },
};

export const ImgNoWidthOrHeightWithStyle: Story = {
  args: {
    style: {
      border: "3px solid red",
      borderRadius: "50%",
    },
  },
};

export const ImgWidthAndHeight_Responsive_Style: Story = {
  args: {
    w: "512",
    h: "512",
    responsive: true,
    style: {
      border: "3px solid red",
      borderRadius: "20%",
    },
  },
};
