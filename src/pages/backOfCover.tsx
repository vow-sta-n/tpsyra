import "../App.css";
import water from "../assets/video/water.mp4";
import art from "../assets/video/art.mp4";
import ppl from "../assets/video/ppl.mp4";
import futu from "../assets/video/future.mp4";
import lg from "../assets/mag/001.png";

export default function BackOfCover() {
  return (
    <div className="w-full h-full bg-white overflow-hidden relative">
      {/* Pages Body */}
      <div className="z-50 grid grid-cols-2 h-full">
        {/* Left Half */}
        <div className="relative pt-4">
          <div className="relative w-full h-full bg-white overflow-hidden">
            {/* ------ LEFT TEXT BLOCK ------ */}
            <div className="absolute left-[5%] top-[4%] w-[35%] z-20">
              {/* TPSYRA Details */}
              <div className="mt-0 text-[10px] leading-[11px] tracking-wide">
                <video
                  src={art}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="absolute top-[5%] -left-2 mb-2 z-0"
                  style={{ width: "75%" }}
                />
                <div className="mt-32">
                  <p className="font-bold text-[16px] top-28">TPSYRA 2025</p>
                  <p className="mt-2">
                    Thiagarajar's Psychological Reflection
                    <br />
                    for Mental Awakening
                  </p>
                  <div className="mt-3">
                    <p>Released On August 2025</p>
                    <p>First Edition</p>
                  </div>
                </div>
              </div>
              {/* Vertical Line */}
              <div className="absolute -left-[9px] -top-2 h-[230px] w-[4px] bg-black"></div>
            </div>

            {/* ------ QUERIES & FEEDBACK ------ */}
            <div className="absolute left-[3%] bottom-[24%] z-20 w-[40%] text-[12px] leading-[11px]">
              <video
                src={futu}
                autoPlay
                muted
                playsInline
                loop
                className="w-[55%] absolute left-[-12px] bottom-16 pointer-events-none"
              />

              <p className="font-semibold text-[14px] mb-1">
                For Queries & Feedback
              </p>
              <div className="text-[9px]" style={{ letterSpacing: ".5px" }}>
                <p>In Case Of Any Queries Or</p>
                <p>Feedback Feel Free To</p>
                <p>Contact Us On</p>
                <p className="mt-1 font-semibold">E-Mail: tpsyra@tcarts.in</p>
              </div>
            </div>

            {/* ------ ABOUT COVER ------ */}
            <div className="absolute left-[3%] bottom-[5%] w-[45%] z-20">
              <p className="font-semibold text-[14px]">About The Cover Image</p>
              <p className="text-[9px] leading-[10px] text-justify">
                This image speaks to the transformative nature of the human
                psyche. A soul dissolves into the sky no face, no frame, just
                fragments of thought flowering into being. Clouds carry
                daydreams, petals whisper memories. This is not a person, but a
                becoming. A mind unrooted, blooming in all directions an
                infinite garden of the unseen self. It reflects the ﬂuidity of
                identity, the emergence of unconscious material into awareness,
                and the beauty of psychological growth in its most organic form.
              </p>
            </div>

            {/* ------ COLLEGE CONTACT ------ */}
            <div className="absolute right-[8%] bottom-[6%] text-right flex flex-col items-end gap-1 z-20 ">
              {/* Video */}
              <video
                src={ppl}
                autoPlay
                muted
                playsInline
                loop
                className="w-[15%] pointer-events-none"
              />

              {/* Title */}
              <p className="font-bold text-[12px]">College Contact</p>
              {/* Details */}
              <p
                className="text-[8px] leading-[11px] bg-white pl-4"
                style={{ letterSpacing: ".5px" }}
              >
                #139-140, Kamarajar Salai, Madurai - 625009, India
                <br />
                TEL: +91 452 2311875, FAX: +91 452 2312375
                <br />
                EMAIL: principal@tcarts.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="absoulte">
          <div style={{ width: "200%", height: "100%", overflow: "hidden" }}>
            <img
              src={lg}
              style={{
                width: "100%",
                height: "100%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Visual 1 */}
      <video
        src={water}
        autoPlay
        muted
        playsInline
        loop
        className="absolute bottom-0 left-14 h-[100%] w-[50%] pointer-events-none z-0"
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
