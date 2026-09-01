import AboutSterilizationChampions from "@/components/AboutSterilizationChampions";
import Articles from "@/components/Articles";
import Events from "@/components/Events";
import FounderMessage from "@/components/FounderMessage";
import HeroSection from "@/components/HeroSection";
import JobSection from "@/components/JobSection";
import MissionVision from "@/components/MissionVision";
import NewsYt from "@/components/NewsYt";
import VideoSection from "@/components/VideoSection";
import WeeklyQuestion from "@/components/WeeklyQuestion";


export default function Home() {
  return (
   <div>
    <HeroSection />
    <WeeklyQuestion />
    <MissionVision />
    <JobSection />
    <VideoSection />
    <FounderMessage />
    <Articles />
    <AboutSterilizationChampions />
    <Events />
    <NewsYt />
   </div>
  );
}
