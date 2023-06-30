import { ReactNode } from "react";

type Props = {
    color?: string;
    altura?: string;
    children?: ReactNode;
};

const Section = ({
    color = "[#222222]",
    altura = "44",
    children,
}: Props): JSX.Element => {
    // const background = `bg-${color}`;
    // const alto = `h-${altura}`;

    return (
        <div
            className={`flex items-center justify-center px-6 md:px-20 h-${altura} bg-${color}`}
        >
            {children ? children : <></>}
        </div>
    );
};

export default Section;
