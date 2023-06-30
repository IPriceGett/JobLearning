import Header from "components/shared/header";
import Card from "components/pages/index/card";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";

const IndexContent = (): JSX.Element => {
    return (
        <>
            <Header></Header>
            {/* <Section color="#D9D9D9"></Section>
      <Section color="#FFFFFF">
        <div className="flex w-full items-start justify-center flex-col">
          <span className="text-2xl text-left">
            Encuentra la solucion a tu problema
          </span>
          <p className="mt-[90px]">description</p>
          <div className="w-full bg-[#D9D9D9] h-[300px] rounded-[30px]"></div>
        </div>
      </Section>
      <Section color="#D9D9D9">
        <Card
          title="matineke"
          desc="weko"
          photo="data:image/jpeg;base64,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"
        ></Card>
      </Section>
      <Section color="#FFFFFF">
        <div className="flex w-full items-start justify-center flex-col">
          <span className="text-2xl text-left">Titulo</span>
          <p className="mt-[90px]">datos interesantes sobre la misma</p>
          <div className="w-full bg-[#D9D9D9] h-[300px] rounded-[30px]"></div>
        </div>
      </Section>
      <Section color="#D9D9D9">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div>
            <span className="text-2xl text-left">Casos exitosos</span>
            <p>description</p>
          </div>
          <div className="flex justify-between w-1/2">
            <Circle photo="data:image/jpeg;base64,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"></Circle>
          </div>
        </div>
      </Section>
      <Section color="#FFFFFF">
        <div className="flex flex-col md:flex-row w-full items-center justify-around">
          <div>
            <span className="text-2xl text-left">titulo</span>
            <p>description</p>
          </div>
          <div className="w-full md:w-2/5 rounded-[10px] bg-[#D9D9D9] h-[400px]"></div>
        </div>
      </Section> */}
            <Section color="#222222">
                <div className="w-full text-white flex flex-col md:flex-row items-center">
                    <div className="basis-4/12 px-8">
                        <span className="text-3xl font-bold">
                            ¡Aprende lo que necesites por expertos en el area!
                        </span>
                    </div>
                    <div className="basis-8/12 flex justify-center bg-black w-full">
                        <span className="h-64">imagen</span>
                    </div>
                </div>
            </Section>
            <Section color="#222222">
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
            </Section>
        </>
    );
};

export default IndexContent;
