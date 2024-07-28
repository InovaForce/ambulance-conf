import Header from '@/components/header';
import Layout from './layout'
import HomeComp from "@/components/home";

import { getDictionary } from "@/services/dictionaries";
import Footer from '@/components/footer';

const Home = async ({ params }) => {
  

  const { lang } = params;
  const dict = await getDictionary(lang);

  

  return (
      <>
      <Header lang={lang} />
      <HomeComp dict={dict} />
      </>

  );
};

export default Home;
