import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@relume_io/relume-ui";
import { ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";

export const Projects = (props) => {
  const { tagline, heading, description, features } = {
    ...ProjectsDefaults,
    ...props,
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetIsActive = (index) => {
    setActiveIndex((prevIndex) => {
      if (
        prevIndex === index &&
        features.filter((_, i) => i === prevIndex).length === 1
      ) {
        return prevIndex;
      }
      return prevIndex === index ? null : index;
    });
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-4xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="flex w-full flex-col overflow-hidden border-b border-l border-r border-border-primary lg:h-[90vh] lg:flex-row lg:border-r-0 lg:border-t">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              isActive={activeIndex === index}
              setIsActive={() => handleSetIsActive(index)}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ isActive, setIsActive, ...feature }) => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  const CardContent = isMobile ? motion.div : "div";
  return (
    <motion.div
      className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-border-primary"
      onClick={setIsActive}
      initial={false}
      animate={{
        width: isMobile ? "100%" : isActive ? "100%" : "5rem",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-border-primary py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
        <p className="absolute left-6 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0">
          {feature.columnText}
        </p>
        <h2 className="hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:text-2xl lg:font-bold">
          {feature.verticalText}
        </h2>
        <p className="text-xl font-bold md:text-2xl lg:hidden">
          {feature.horizontalText}
        </p>
      </div>
      <CardContent
        className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
        initial={false}
        animate={{
          height: isActive ? "auto" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
          <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
            {feature.heading}
          </h3>
          <p className="md:text-md">{feature.description}</p>
          <Button variant="outline" className="w-fit mx-auto mt-4">
            <a href={feature.link} target="_blank">
              Check
            </a>
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="mt-8 md:mt-10 md:h-[25rem] lg:mt-12 bg-fit">
            <img
              src={feature.image.src}
              alt={feature.image.alt}
              style={{borderRadius:"7px"}}
              // className="!rounded-[10px]"
              // clasName="size-full object-cover"
            />
          </div>
        </div>
      </CardContent>
    </motion.div>
  );
};

export const ProjectsDefaults = {
  tagline: "Projects",
  heading: "The last three projects I have implemented so far",
  description:
    "You can view the details of each projects on GitHub or via the link to each project separately on the web.",

  features: [
    {
      columnText: "01",
      verticalText: "First Website",
      horizontalText: "First Website",
      heading: "Mini Wordpress",
      description:
        "A dynamic site, where the company can add details of pages and sections as desired without referring to the programmer.",
      image: {
        src: "/public/manarah.png",
        alt: "Mini Wordpress",
      },
      link: "https://manarah-al-abtkar.vercel.app/",
    },
    {
      columnText: "02",
      verticalText: "Sec Website",
      horizontalText: "Sec Website",
      heading: "Landing page",
      description:
        "A simple but visually rich landing page with lots of professional animation.",
      image: {
        src: "/public/mark.png",
        alt: "Landing page",
      },
      link: "https://mark-louay.vercel.app/",
    },
    {
      columnText: "03",
      verticalText: "Third Website",
      horizontalText: "Third Website",
      heading: "Blog",
      description:
        "An interactive blog for articles with many features such as comments and others, with a special page for the owner to control the smallest details.",
      image: {
        src: "/public/blog.png",
        alt: "Blog",
      },
      link: "https://github.com/10uay/blog.git",
    },
  ],
};

Projects.displayName = "Projects";
