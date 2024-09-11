import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { action } from "@storybook/addon-actions";
import ScrollToTop from "./scrollToTop.svelte";

const meta = {
  title: "Misc/Scroll To Top",
  component: "khao-scroll-to-top",
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      type: "string",
    },
    scrollThreshold: {
      control: "text",
      type: "string",
    },
    forceVisible: {
      control: { type: "boolean" },
      type: "Boolean",
    },
  },
} satisfies Meta<ScrollToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  title: string;
  scrollThreshold: string;
  forceVisible: string;
}

export const Default: Story = {
  args: {
    title: "Scroll to the top",
    scrollThreshold: "100",
    forceVisible: false,
  },

  render: (props: renderProps) => {
    window.addEventListener(
      "khao-scroll-to-top-visibility-change",

      () => {
        console.log("khao-scroll-to-top-visibility-change");
        action("khao-scroll-to-top-visibility-change");
      }
    );

    const mockContent = `<div style="height:1400px">
       <style>
          article.recipe {
          
            margin-bottom: 2rem;
            padding: 1rem;
            border: 1px solid gray; 
          
          }
       </style>
        
       <h2>&lt;khao-scroll-to-top&gt;</h2>

        <article class="recipe">
          <p>
          This component ads a "Scroll To Top" button to your document when the user scrolls over a given horizontal threshold.
          </p>
         </article>  

      
        <h2>Please scroll down!</h2>

      </div>`;

    return `${mockContent}
      <khao-scroll-to-top 
        title="${props.title}" 
        scrollThreshold="${props.scrollThreshold}" 
        forceVisible=${props.forceVisible}></khao-scroll-to-top>`;
  },
};
