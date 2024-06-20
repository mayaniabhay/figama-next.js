import CoreTracks from "@/sections/CoreTracks";
import Hero from "@/sections/Hero";
import Outcome from "@/sections/Outcome";
import SpecializedTracks from "@/sections/SpecializedTracks";
import favicon from "@/app/favicon.ico"


export default function Home() {
  return (
   <>
    <main>

      {/* hero section  */}
      <Hero />

      {/* Sore section  */}
      <CoreTracks />

      {/* Specializes Tracks  */}
      <SpecializedTracks />

      {/* Outcome tracks  */}
      <Outcome />
    </main>
   </>
  );
}
