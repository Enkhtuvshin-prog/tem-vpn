import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import axios from "axios";

// const features = [
//   "Powerfull online protection.",
//   "Internet without borders.",
//   "Supercharged VPN",
//   "No specific time limits."
// ]

const Feature = () => {
const [features, setFeatures] = useState([]);
const [feaLoad, setFeaLoad] = useState(true);

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const getFeatures = async()=>{
    try{ const res = await axios.get("http://localhost:9009/features")
    console.log("fe", res.data);
      setFeatures(res.data)
      setFeaLoad(false)
    }catch(err){
      console.log("err", err);
    }
  };
 
  useEffect(()=>{
    getFeatures();
  }, []);

  return !feaLoad ?(
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
        <textarea type="text"  
             className="overflow-y-hidden resize-none rounded-md text-3xl lg:text-4xl font-medium leading-relaxed text-black-60 "
             value={features[0].title}
             onChange={(e)=>setFeatures(e.target.value)}  /> 
        <textarea type="text"  cols={50} rows={3} className="overflow-y-hidden resize-none rounded-md my-2 pt-4 text-black-500" 
            value={features[0].text}
             onChange={(e)=>setFeatures(e.target.value)}
             />
          
          <ul className="text-black-500 self-start list-inside ml-8">
            {features[0].lists.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  <textarea type="text"  cols={50}  className="overflow-y-hidden resize-none rounded-md" 
            value={feature}
             onChange={(e)=>setFeatures(e.target.value)}
             />
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  ): <h1>Loading</h1>
};

export default Feature;
