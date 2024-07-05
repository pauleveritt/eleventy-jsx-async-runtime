export type ThisContext = {
  context: {
    subtitle: string;
  };
};

export type HeadingProps = {
  title: string;
};

export function Heading(this: ThisContext, { title }: HeadingProps) {
  // The subtitle is on the index.md and is part of `data` in the
  // eleventy.config.js compile function. That function tells Preact
  // to assign `data` to `this.context` for every component in the render.
  const { subtitle } = this.context;
  return <h2 title={subtitle}>{title}</h2>;
}
