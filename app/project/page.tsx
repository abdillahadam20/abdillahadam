import Projectpage from "@/components/pages/Projectpage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adam Abdillah | Project Page",
  description:
    "Welcome to my portfolio website. I am Adam Abdillah, a passionate web developer with a focus on creating dynamic and user-friendly web applications. Explore my projects and skills to learn more about my work.",
  openGraph: {
    images: [
      {
        url: "https://adamabdillah.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "Adam Abdillah | Project Page",
      },
    ],
  },
};

const Project = () => {
  return <Projectpage />;
};

export default Project;
