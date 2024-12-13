import { Hero } from "../components/hero";
import { Enroll } from "../components/enroll";
import { Expect } from "../components/expect";
import { Overview } from "../components/overview";
import { Question } from "../components/question";

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
