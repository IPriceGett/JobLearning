import { ReactNode } from "react";

type Props = {
    color: string;
    children?: ReactNode;
};

const Section = ({ color, children }: Props): JSX.Element => {
    const background = `bg-[${color}]`;

    return (
        <div
            className={
                "flex h-auto items-center justify-center p-8 md:p-20 " +
                background
            }
        >
            {children ? children : <></>}
        </div>
    );
};

export default Section;
