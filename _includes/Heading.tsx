export type Context = {};

export type ThisHeading = {
    context: Context;
};

export type HeadingProps = {
    title: string;
};

export function Heading(this: ThisHeading, {title}: HeadingProps) {
    return (
        <h2>{title}</h2>
    );
}
