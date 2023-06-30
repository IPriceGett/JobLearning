import Button from "../../generic/button";

type Props = {
    title?: string;
    desc?: string;
    photo?: string;
};

const card = ({ title, desc, photo }: Props): JSX.Element => {
    return (
        <div className="grid items-center py-2 aspect-video max-h-40 p-2 justify-center bg-[#a6a6a6]">
            <div className="h-auto">
                <img src={photo} className="h-fit bg-white"></img>
            </div>
            <span className="text-left text-2xl">{title}</span>
            <p>{desc}</p>
            <p>precio</p>
        </div>
    );
};

export default card;
