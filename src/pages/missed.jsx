import { Header } from "../components/LandingPageComponent/header";
import MissedHero from "../components/MissedComponents/MissedHero";
import WhatYouMissed from "../components/MissedComponents/WhatYouMissed";
import MissedTalking from "../components/MissedComponents/MissedTalking";
import NextRound from "../components/MissedComponents/NexrRound";

export default function Page() {
  return <>
     <Header/>
     <MissedHero/>
     <WhatYouMissed/>
     <MissedTalking/>
     <NextRound/>
  </>;
}
