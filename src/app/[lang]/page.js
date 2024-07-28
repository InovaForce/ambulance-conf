import Header from '@/components/header';
import { getDictionary } from "@/services/dictionaries";
import Language from '@/components/language';

const Home = async ({ params }) => {
  

  const { lang } = params;
  const dict = await getDictionary(lang);

  

  return (
      <>
      <Header lang={lang} />
      <Language dict={dict} />
      </>

  );
};

export default Home;
