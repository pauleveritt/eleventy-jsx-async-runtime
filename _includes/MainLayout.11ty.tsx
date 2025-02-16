import {Heading} from "./Heading";

export type MainLayoutProps = {
    title: string;
};

export function MainLayout({title}: MainLayoutProps) {
    return (
        <html>
        <head>
            <title>{title}</title>
        </head>
        <body>
        <Heading title={title}/>
        </body>
        </html>
    );
}

export const render = MainLayout;
