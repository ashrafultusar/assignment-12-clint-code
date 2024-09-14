import img1 from '../../../assets/photo/image-bottom.png'
import { motion } from "framer-motion"


const Paralox = () => {
  return (
    <div>
      <div
        ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center"
      >
        <motion.h1
          style={{ y: textY }}
          className="font-bold text-white text-7xl md:text-9xl relative z-10"
        >
          PARALLAX
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("https://i.ibb.co.com/m0WDT9D/pexels-cottonbro-4065145.jpg")`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Paralox;
