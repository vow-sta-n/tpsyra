import "../App.css";
import cover from "../assets/mag/002.png";
import clip from "../assets/video/cli.mp4";

export default function EditorialPage() {
  return (
    <div className="w-full h-full bg-white overflow-hidden relative">
      {/* Pages Body */}
      <div className="z-50 grid grid-cols-2 h-full">
        {/* Left Half */}
        <div className="relative pt-4">
          {/* Main Content Area */}
          <div className="absolute inset-0 flex flex-col items-center justify-between z-50">
            <div className="inset-0 flex flex-col items-start z-50">
              <video
                src={clip}
                autoPlay
                muted
                playsInline
                loop
                width={"22%"}
                className="pt-16 ml-40"
              />
            </div>
            <div className="inset-0 flex flex-col items-center z-50"></div>
          </div>
        </div>
      </div>
      {/* Visual 1 */}
      <img
        src={cover}
        // autoPlay
        // muted
        // playsInline
        // loop
        className="absolute bottom-0 left-0 w-[100%] pointer-events-none z-0"
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
