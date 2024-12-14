import { kid1Img, kid2Img, kid3Img } from "./media";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const socials = [
  { url: "https://twitter.com", icon: FaTwitter },
  { url: "https://facebook.com", icon: FaFacebook },
  { url: "https://instagram.com", icon: FaInstagram },
];

export const questions = [
  {
    quesiton: "What is the Kidpreneur Bootcamp?",
    answer:
      "The Kidpreneur Bootcamp is a fun and interactive program designed to teach kids the basics of entrepreneurship and help them develop their own business ideas.",
  },
  {
    quesiton: "Who is the bootcamp for?",
    answer:
      "The bootcamp is for kids aged 8-16 who are interested in entrepreneurship and want to learn how to start their own business.",
  },
  {
    quesiton: "What are the dates and times of the bootcamp?",
    answer:
      "The bootcamp will take place on [insert dates] from [insert times].",
  },
  {
    quesiton: "How do I register my child for the bootcamp?",
    answer:
      "To register, please fill out the online application form on our website and pay the registration fee.",
  },
  {
    quesiton: "What is the registration fee?",
    answer:
      "The registration fee is 40,000,$20 This fee covers all activities during the bootcamp.",
  },
  {
    quesiton: "Is there a deadline for registration?",
    answer:
      "Yes, the deadline for registration is 5 days before each cohort. However, spaces are limited, so we encourage you to register early.",
  },
  {
    quesiton: "What will my child learn during the bootcamp?",
    answer:
      "During the bootcamp, your child will learn the basics of entrepreneurship, including business planning, marketing, finance, and more.",
  },
  {
    quesiton:
      "Will my child have the opportunity to work on their own business idea during the bootcamp?",
    answer:
      "Yes, your child will have the opportunity to work on their own business idea and receive feedback and guidance from our experienced instructors.",
  },
  {
    quesiton: "Where will the bootcamp take place?",
    answer: "The bootcamp will take place online.",
  },
  {
    quesiton:
      "Will my child have access to mentorship and support during and after the bootcamp?",
    answer:
      "Yes, our experienced instructors and staff will provide mentorship and support during and after the bootcamp.",
  },
];

export const expectationsHeader = [
  {
    content:
      "Your child creating a business idea  from scratch, bringing their creativity to life and serving their community.",
  },
  {
    content:
      "Learning essential money skills like saving budgeting, and investing all while having fun.",
  },
  {
    content:
      "Gaining confidence through hands on activities and real-world challenges, preparing them for their dream future.",
  },
];

export const expectationsBody = [
  {
    content:
      "Your child creating a business idea  from scratch, bringing their creativity to life and serving their community.",
  },
  {
    content:
      "Learning essential money skills like saving budgeting, and investing all while having fun.",
  },
  {
    content:
      "Gaining confidence through hands on activities and real-world challenges, preparing them for their dream future.",
  },
];

export const overviews = [
  {
    image: kid1Img,
    className: "lg:bg-yellow-normal",
    imgClassName:
      "lg:bg-transparent bg-yellow-normal origin-bottom lg:scale-y-[1.35] lg:scale-x-[1.05]",
    title: "Curious about how businesses work and eager to learn.",
  },
  {
    image: kid2Img,
    className: "lg:bg-green-normal",
    imgClassName: "lg:bg-transparent bg-green-normal ",
    title:
      "Passionate about making a difference and solving real-world problems.",
  },
  {
    image: kid3Img,
    className: "lg:bg-pale-blue-normal",
    imgClassName: "lg:bg-transparent bg-blue-normal origin-bottom lg:scale-y-[1.25]",
    title: "Excited to try new things, challenge themselves, and have fun! ",
  },
];
