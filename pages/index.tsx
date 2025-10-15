import Head from "next/head";
import Header from "@/components/Header/Header";
import SectionMain from "@/components/SectionMain/SectionMain";
import ManImg from "@/assets/images/man.png";


export default function Home() {

  return (
    <>
      <Head>
        <title>Успейте открыть пробную неделю</title>
        <meta name="description" content="Успейте открыть пробную неделю" />
      </Head>
      <Header />
      <main className="w-full max-w-[1216px] mx-auto pb-[150px]">        
        <SectionMain manImage={ManImg} />
      </main>
    </>
  );
}
