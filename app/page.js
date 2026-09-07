import AboutSection from "@/components/AboutSection";
import AboutSterilizationChampions from "@/components/AboutSterilizationChampions";
import Articles from "@/components/Articles";
import Events from "@/components/Events";
import WhiteThemeSections from "@/components/FeaturesSection";
import FounderMessage from "@/components/FounderMessage";
import HeroSection from "@/components/HeroSection";
import JobSection from "@/components/JobSection";
import MissionVision from "@/components/MissionVision";
import NewsYt from "@/components/NewsYt";
import TeamSection from "@/components/Team";
import VideoSection from "@/components/VideoSection";
import WeeklyQuestion from "@/components/WeeklyQuestion";


export default function Home() {
  return (
   <div>
    <HeroSection />
    <WeeklyQuestion />
    <AboutSection />
    <JobSection />
    <VideoSection />
    <TeamSection />
    <FounderMessage />
    <Articles />
    {/* <AboutSterilizationChampions /> */}
    <WhiteThemeSections />
    <Events />
    {/* <NewsYt /> */}
    <MissionVision />
   </div>
  );
}
