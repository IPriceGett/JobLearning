import Header from "components/shared/header";
import Card from "components/pages/index/card";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";

const IndexContent = (): JSX.Element => {
    return (
        <>
            <Header></Header>
            <div className="container mx-auto my-10">
                <div>
                    <div className="w-full text-white flex flex-col md:flex-row items-center">
                        <div className="basis-4/12 px-8">
                            <span className="text-3xl font-bold">
                                ¡Aprende lo que necesites por expertos en el
                                area!
                            </span>
                        </div>
                        <div className="basis-8/12 flex justify-center bg-black w-full">
                            <span className="h-64">imagen</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full text-white flex flex-col md:flex-row items-center">
                        <div className="basis-4/12 flex justify-center bg-black w-full">
                            <span className="h-64">imagen</span>
                        </div>
                        <div className="basis-8/12">
                            <div>
                                <p className="text-3xl font-bold">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Soluta, sequi!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndexContent;
