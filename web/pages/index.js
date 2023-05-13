import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <>
      <div id="/"  className="w-full" style={{display:"flex"}}>
        <div>
           <Sidebar/>
        </div>
        <div className="w-10/12">
          <SeoHead title='LaslesVPN Landing Page' />
            <Layout>
              <Hero />
              <Feature />
              <Pricing />
            </Layout>
        </div>
      </div>
    </>
  );
}
