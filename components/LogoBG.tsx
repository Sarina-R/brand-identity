import Image from "next/image";
import { InBackgroundSection } from "@/app/type";
import { motion } from "framer-motion";

interface Props {
  data: InBackgroundSection;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const LogoBackground = ({ data }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 py-8">
      <motion.div
        className="md:sticky md:top-20 self-start space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          In Background
        </motion.h2>
        <ul className="list-disc pr-5 space-y-2 text-sm text-neutral-700 leading-relaxed">
          {data.listItems.map((item, i) => (
            <motion.li
              key={i}
              variants={listItem}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="overflow-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={imageVariants}
      >
        <Image
          src={data.image}
          alt="logo background usages"
          width={1000}
          height={1000}
          className="w-full h-auto rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default LogoBackground;
