import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

const Section = ({ children }: Props): JSX.Element => {
    return (
        <div
            className={`flex items-center justify-center w-full text-white md:my-8 p-4 flex-col md:flex-row`}
        >
            {children ? children : <></>}
        </div>
    );
};

export default Section;
