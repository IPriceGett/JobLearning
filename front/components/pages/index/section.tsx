import { ReactNode } from "react";

type Props = {
    color?: string;
    altura?: string;
    children?: ReactNode;
};

const Section = ({
    color = "#222222",
    altura = "auto",
    children,
}: Props): JSX.Element => {
    const background = `bg-[${color}]`;
    const alto = `h-${altura}`;

    return (
        <div
            className={
                "flex items-center justify-center p-8 md:p-20 " +
                background +
                " " +
                alto
            }
        >
            {children ? children : <></>}
        </div>
    );
};

export default Section;
