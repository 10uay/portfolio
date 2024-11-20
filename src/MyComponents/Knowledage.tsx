import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { Button } from "../components/ui/button"
import { ChevronRight } from "lucide-react"

import type { ButtonProps } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type KnowledageProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Knowledage = (props: KnowledageProps) => {
  const { heading, description, questions, footerHeading, footerDescription } = {
    ...KnowledageDefaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg">
        <div className="mb-12 text-start md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion type="multiple">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md">{question.title}</AccordionTrigger>
              <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Link to="https://wa.me/+963948911648" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className=' flex justify-center items-center z-50 w-fit mx-auto mt-4 bg-transparent text-black dark:text-white border-black dark:border-white'>
                contact me
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const KnowledageDefaults: KnowledageProps = {
  heading: "Knowledages",
  description:
    "Here you can see all my qualifications that qualify me to build an integrated website quickly and efficiently.",
  questions: [
    {
      title: "HTML, CSS, and JavaScript",
      answer:
        "Utilized HTML, CSS, and JavaScript to create visually appealing and responsive web pages that met client requirements.",
    },
    {
      title: "UX/UI",
      answer:
        "Worked closely with UX/UI designers to translate their designs into functional web applications.",
    },
    {
      title: "Git",
      answer:
        "Utilized version control systems such as Git to track changes throughout the development process.",
    },
    {
      title: "Collaborated with back-end developers",
      answer:
        "Collaborated with back-end developers to improve website functionality and integrate new features.",
    },
    {
      title: "responsive design",
      answer:
        "Optimized site content for mobile devices using responsive design techniques.",
    },
    {
      title: "issues",
      answer:
        "Troubleshot technical issues related to front end development, ensuring prompt resolution to maintain project timelines.",
    },
    {
      title: "Compatibility",
      answer:
        "Produced websites compatible with multiple browsers.",
    },
    {
      title: "RESTful APIs",
      answer:
        "Integrated RESTful APIs for seamless data exchange between the front-end application and back-end services.",
    },
    {
      title: "frameworks",
      answer:
        "Leveraged modern frameworks like Node.js and Express.js for efficient server-side development.",
    },
    {
      title: "Node.js",
      answer:
        "Applied Node.js for server-side scripting, enabling asynchronous processing of requests and improving application responsiveness.",
    },
  ],
  footerHeading: "Need A Service?",
  footerDescription: "Just text me.",
  button: {
    title: "Contact",
  },
};

Knowledage.displayName = "Knowledage";
