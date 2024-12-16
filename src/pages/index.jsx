import { Hero } from "../components/LandingPageComponent/hero";
import { Enroll } from "../components/LandingPageComponent/enroll";
import { Expect } from "../components/LandingPageComponent/expect";
import { Overview } from "../components/LandingPageComponent/overview";
import { Question } from "../components/LandingPageComponent/question";

export default function Page() {
  return (
    <>
      <Hero />
      <Expect />
      <Overview />
      <Enroll />
      <Question />
    </>
  );
}
