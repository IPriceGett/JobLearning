import Button from "../../generic/button";

type Props = {
    title?: string;
    desc?: string;
    photo?: string;
    precio?: number;
};

const card = ({ title, desc, photo, precio }: Props): JSX.Element => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-start max-w-sm p-2 space-y-2 text-white">
                <span className="mt-auto text-3xl text-bold ">{title}</span>
                <img
                    src={photo}
                    className="h-44 aspect-video bg-black mx-auto rounded-[5px]"
                ></img>
                <div className="pb-8 ml-0">
                    <p className="text-xl text-bold ">{desc}</p>
                    <p className="text-lg text-bold ">${precio} CLP</p>
                </div>
            </div>
        </div>
    );
};

export default card;
