import Header from "./components/Header/header";
import Second from "./components/Home/second";
import ITsection from "./components/Home/itSection";
import TechSection from "./components/Home/techSection";
import PortfolioSection from "./components/Home/portFolio";
import FormSection from "./components/Home/bannerForm";
export default function Home() {
  return (
    <>
      <Header />
      <Second />
      <ITsection />
      <TechSection />
      <PortfolioSection />
      <FormSection />
    </>
  );
}
