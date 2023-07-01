import Header from "components/shared/header";
import Card from "components/pages/index/card";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";

const IndexContent = (): JSX.Element => {
    return (
        <>
            <Header></Header>
            <div className="container mx-auto md:my-10 my-2 md:px-10 px-4">
                <Section>
                    <div className="basis-4/12">
                        <span className="text-3xl font-bold">
                            ¡Aprende lo que necesites por expertos en el area!
                        </span>
                    </div>
                    <div className="basis-8/12 flex justify-center bg-black w-full">
                        <span className="h-64">imagen</span>
                    </div>
                </Section>
                <Section>
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
                </Section>
            </div>
        </>
    );
};

export default IndexContent;
