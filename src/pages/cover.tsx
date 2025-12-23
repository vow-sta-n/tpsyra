import "../App.css";
import cover from "../assets/video/cover.mp4";
import back from "../assets/video/back.mp4";
import clg from "../assets/imgs/clg.png";
import guide from "../assets/imgs/guide.png";
import naac from "../assets/imgs/nacc.png";
import title from "../assets/imgs/title.png";

export default function CoverPage() {
  return (
    <div className="w-full h-full bg-white overflow-hidden relative">
      {/* Pages Body */}
      <div className="z-50 grid grid-cols-2 h-full">
        {/* Left Half */}
        <div className="relative pt-4">
          {/* Main Content Area */}
          <div className="absolute inset-0 flex flex-col items-center justify-between z-50">
            <div className="inset-0 flex flex-col items-center z-50">
              <img src={clg} width={"80%"} className="pt-10" />
              <img src={title} width={"80%"} className="pt-5" />
            </div>
            <div className="inset-0 flex flex-col items-center z-50">
              <img src={guide} width={"70%"} className="pb-6" />
              <img src={naac} width={"80%"} className="pb-5" />
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="w-full h-full bg-white relative overflow-hidden select-none">
          {/* TOP LEFT */}
          <div className="absolute z-20 top-4 left-4 leading-tight tracking-wide">
            <p className="uppercase text-[11px] font-semibold">
              ART <span className="uppercase text-[11px] font-light">on the</span>
            </p>

            <p className="uppercase text-[13px] font-bold">UNDERGROUND</p>
          </div>

          {/* TOP RIGHT - VERTICAL ISSUE TEXT */}
          <div className="absolute z-20 top-12 right-4 rotate-90 origin-right">
            <p className="uppercase text-[8px] tracking-widest font-medium">
              ISSUE 01
            </p>
          </div>

          {/* BOTTOM LEFT */}
          <div className="absolute z-20 bottom-4 left-4">
            <p className="uppercase text-[8px] font-semibold tracking-wider">
              TPSYRA 2025
            </p>
          </div>

          {/* BOTTOM RIGHT */}
          <div className="absolute z-20 bottom-4 right-4 text-right">
            <p className="text-[8px] tracking-wide font-medium">
              From The Department Of Psychology
            </p>
          </div>
        </div>
      </div>
      {/* Visual 1 */}
      <video
        src={cover}
        autoPlay
        muted
        playsInline
        loop
        className="absolute bottom-0 left-0 w-[50%] pointer-events-none z-0"
      />
      <video
        src={back}
        autoPlay
        muted
        playsInline
        // loop
        className="absolute bottom-0 right-0 w-[50%] pointer-events-none z-0"
      />
    </div>
  );
}

/*
      <div className="relative w-full z-50 pl-5 pr-5 mt-7">

        <div className="absolute -top-3 left-7 text-[7px] tracking-wide text-gray-600 z-20">
          PAGE 38
        </div>


        <div className="absolute -top-3 right-7 text-[7px] tracking-wide z-20">
          WRITTEN BY <span className="font-bold">YOKASAI S</span>
        </div>


        <div className="w-full h-[0.4px] bg-black "></div>
      </div>

      <div className="absolute bottom-3 z-50 left-0 w-full px-10">

        <div className="w-full h-[0.4px] bg-black" />


        <div className="flex justify-center items-center gap-[4.9%] mt-1">
          <span className="text-[7px] text-gray-600 tracking-wide">
            PAGE 37
          </span>

          <span className="text-[7px] text-gray-600 tracking-wide">
            TPSYRA 2025
          </span>
        </div>
      </div>
*/
