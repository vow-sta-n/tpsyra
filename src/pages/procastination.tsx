import "../App.css";
import lad from "../assets/video/pros.mp4";

export default function ProcrastinationSpread() {
  return (
    <div className="w-full h-full bg-white overflow-hidden relative">
      {/* Page No Top */}
      <div className="relative w-full z-50 pl-5 pr-5 mt-7">
        {/* PAGE (top-left above line) */}
        <div className="absolute -top-3 left-7 text-[7px] tracking-wide text-gray-600 z-20">
          PAGE 38
        </div>

        {/* AUTHOR (top-right above line) */}
        <div className="absolute -top-3 right-7 text-[7px] tracking-wide z-20">
          WRITTEN BY <span className="font-bold">YOKASAI S</span>
        </div>

        {/* FULL WIDTH LINE */}
        <div className="w-full h-[0.4px] bg-black "></div>
      </div>
      {/* Page No Bottom */}
      <div className="absolute bottom-3 z-50 left-0 w-full px-10">
        {/* Bottom Line */}
        <div className="w-full h-[0.4px] bg-black" />

        {/* Centered text under the line */}
        <div className="flex justify-center items-center gap-[4.9%] mt-1">
          <span className="text-[7px] text-gray-600 tracking-wide">
            PAGE 37
          </span>

          <span className="text-[7px] text-gray-600 tracking-wide">
            TPSYRA 2025
          </span>
        </div>
      </div>
      {/* Header Section */}
      <div className="absolute top-[10%] bg-transparent pl-[20%] z-50">
        {/* Top Subtitle */}
        <div
          className="text-orange-400 font-sans bg-transparent text-xs font-black"
          style={{ letterSpacing: "4px", wordSpacing: "4px" }}
        >
          HILARIOUS PSYCHOLOGY OF
        </div>

        {/* Main Title + Highlight */}
        <div className="relative bg-transparent w-fit">
          <h1
            className="text-3xl font-black font-sans relative z-20"
            style={{ letterSpacing: "10px" }}
          >
            PROCRASTINATION
          </h1>

          {/* Highlight Bar */}
          <div className="absolute right-0 bottom-1 w-[250px] h-3  bg-orange-300 z-10" />
        </div>

        {/* Bottom Subtitle */}
        <div
          className="mt-2 text-[10px]  font-medium text-black"
          style={{ letterSpacing: "1px" }}
        >
          ADVENTURE IN MIND CIRCUS
        </div>
      </div>
      {/* article Text */}
      <div className="z-50 grid grid-cols-2 h-full">
        {/* Left Half */}
        <div className="relative pl-[40%] pt-4">
          {/* Main Content Area */}
          <div
            className="absolute h-full z-50 flex flex-col"
            style={{ marginTop: "18%" }}
          >
            {/* Introduction */}
            <div className="mb-3">
              <p
                className="text-[10px] leading-relaxed text-justify font-light"
                style={{ lineHeight: "13px" }}
              >
                <span className="font-bold">Introduction:</span> Welcome To Your
                Brain's Favorite Pastime '<em>procrastination</em>': It's Not
                Laziness, It's A Chaotic Circus Starring Fear, Overthinking, And
                Your Inner Perfectionist. And Guess What? You're The Clueless
                Ringmaster. Enter MindMorph, A Sassy AI Therapist Here To Whip
                Your Mental Circus Into Shape And Help Your Face.
              </p>
            </div>
            <h2
              style={{ letterSpacing: "4px" }}
              className="text-[10px] font-normal mb-[3px]"
            >
              YOUR ULTIMATE NEMESIS: DEADLINES
            </h2>
            <div className="grid grid-cols-2 h-full">
              {/* Your Ultimate Nemesis Section */}
              <div className="mr-2">
                <p
                  style={{ lineHeight: "15px" }}
                  className="text-[10px] leading-relaxed text-justify mb-3"
                >
                  <span className="font-bold">Act 1:</span> Your Brain, The
                  Comedy Show Picture This: You're Staring At A Deadline, But
                  Instead Of Working, You're Googling <em>"How To Focus"</em>{" "}
                  While Reorganizing Your Spice Rack. Why? Because Your Inner
                  Voices Are Running Wild: The Procrastinator:{" "}
                  <em>"Relax, Bro. Let's Scroll TikTok. Work Can Wait."</em> The
                  Perfectionist:{" "}
                  <em>"If It's Not Flawless, Don't Even Bother."</em> The
                  Overthinker:{" "}
                  <em>"What If Aliens Invade Before You Finish?"</em> It's
                  Mental Chaos, And You're Losing.
                </p>
                {/* Act 2 */}
                <p
                  style={{ lineHeight: "15px" }}
                  className="text-[10px] leading-relaxed text-justify"
                >
                  <span className="font-bold">Act 2:</span> Enter MindMorph
                  MindMorph Arrives, Armed With Sarcasm And Solutions. You:{" "}
                  <em>"I'll Start When I Feel Inspired."</em> MindMorph:{" "}
                  <em>
                    "And I'll Start When I Become Queen Of The Galaxy. Get
                    Real."
                  </em>{" "}
                  It Explains The Truth: Procrastination Is Fear In Disguise.
                  You're Not Lazy You're Overwhelmed And Avoiding Failure.
                </p>
              </div>

              <div className="ml-2">
                <p
                  style={{ lineHeight: "15px" }}
                  className="text-[10px] leading-relaxed text-justify mb-4"
                >
                  <span className="font-bold">Act 3:</span> The AI Plan
                  MindMorph's Strategies Are Simple And Snarky-First Tiny Wins:{" "}
                  <em>
                    "That Big Project? Forget It. Just Write One Sentence.
                    Reward Yourself With Chocolate. Repeat."
                  </em>{" "}
                  Second, Future You Therapy:{" "}
                  <em>
                    "Stop Being A Jerk To Future You. They Don't Deserve This."
                  </em>{" "}
                  Third Tab Cleaning Hack: "Your Brain's Like A Browser With 50
                  Tabs Open. Start Closing Them." Suddenly, Progress Feels...
                  Possible.
                </p>

                {/* Act 4 */}
                <p
                  style={{ lineHeight: "15px" }}
                  className="text-[10px]  leading-relaxed text-justify"
                >
                  <span className="font-bold">Act 4:</span> Comedy Gold, Of
                  Course, It's Not All Smooth Sailing: You Email Your Boss A
                  Blank Document Titled <em>"I Tried"</em>. Your{" "}
                  <em>"Focus Playlist"</em> Turns Into An Impromptu Dance
                  Session. At 2 A.M., You're Googling{" "}
                  <em>"Is Procrastination Genetic?"</em> MindMorph? Unimpressed.{" "}
                  <em>"Focus First, Funky-Town Later."</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="absoulte">
          <div className="absolute mt-28 ml-16">
            <div className="w-[90%]">
              <p className="text-[10px] leading-relaxed">
                <span className="font-bold italic">Act 5:</span> The Final Boss
                The Deadline Doomlord Looms, Made Of Red Clocks And Regret.
                MindMorph Cheers You On:{" "}
                <em>"Done Is Better Than Perfect. Slay That Clock, Hero!"</em>
                You Tackle Tasks One Step At A Time, And BOOM The Doom-Lord
                Crumbles. For The First Time, You Feel The Thrill Of Done. The
                Punchline Procrastination Isn't The Enemy; It's Just Your
                Brain's Circus Needing A Better Act. With Humor, Tiny Wins, And
                A Little AI Sass, You Can Go From Chaos To Champion.
              </p>
            </div>

            {/* Column 2 + 3 */}
            <p className="text-[10px] pr-28 pt-8 leading-relaxed text-justify">
              <span className="font-bold italic">And Remember:</span> The Next
              Time You're Scrolling Memes Instead Of Working, MindMorph's
              Watching, Ready To Yell,{" "}
              <em>"Stop Clowning. Future You Is Begging For Mercy!"</em>
            </p>
          </div>
        </div>
      </div>
      {/* Visual 1 */}
      <video
        src={lad}
        autoPlay
        muted
        playsInline
        loop
        className="absolute bottom-0 right-0 w-[40vw] pointer-events-none z-0"
      />
    </div>
  );
}
