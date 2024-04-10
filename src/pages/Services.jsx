import Footer from "../components/Footer"
import Header from "../components/Header"
import Tabs from "../components/Tabs/Tabs"

function Services() {
  return (
    <div className="min-w-[500px] bg-[#F6F6F6]">
      <Header showLinks={false}/>

      <div className="max-w-7xl mx-auto px-5 pt-[64px] mb-20">
        <Tabs/>
      </div>

      <Footer/>
    </div>
  );
};

export default Services