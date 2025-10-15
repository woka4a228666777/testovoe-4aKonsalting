import Head from "next/head";
import Timer from "@/components/Timer/Timer";
import SectionMain from "@/components/SectionMain/SectionMain";
import ManImg from "@/assets/images/man.png";


export default function Home() {

  return (
    <>
      <Head>
        <title>Успейте открыть пробную неделю</title>
        <meta name="description" content="Успейте открыть пробную неделю" />
      </Head>
      <header className="bg-[#1D5B43] w-full flex flex-col justify-center items-center gap-1 pt-2">
        <p className="text-[24px] font-bold">Успейте открыть пробную неделю</p>
        <Timer />
      </header>
      <main className="w-full max-w-[1216px] mx-auto pb-[150px]">        
        <SectionMain manImage={ManImg} />
      </main>
    </>
  );
}
