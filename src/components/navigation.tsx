import { useState } from "react";

export default function NavigationPanel({
  sections,
  selectedIndex,
  setHoveredIndex,
  setSelectedIndex,
}: {
  sections: any[];
  hoveredIndex: number | null;
  selectedIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
  setSelectedIndex: (i: number | null) => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="absolute top-4 right-4 text-gray-800 text-sm z-20 text-right select-none">
      <p className="font-semibold uppercase tracking-wider text-gray-600 mb-2">
        Navigate
      </p>

      <div className="space-y-2">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="rounded-lg overflow-hidden">
            {/* SECTION HEADER */}
            <div
              onClick={() =>
                setOpenIndex(openIndex === sectionIndex ? null : sectionIndex)
              }
              className="cursor-pointer py-2 transition flex justify-between items-center text-[13px]"
            >
              <span></span>

              <span
                className={`font-medium ${
                  openIndex === sectionIndex ? "opacity-70" : "opacity-100"
                } ${
                  openIndex === sectionIndex ? "font-semibold" : "font-medium"
                }`}
              >
                {section.title}
              </span>
            </div>

            {/* EXPANDED */}
            {openIndex === sectionIndex && (
              <div className="relative pb-6 animate-fadeIn text-[13px]">
                {/* Animated Line */}
                <span className="absolute right-0 top-0 h-full w-[1px] bg-gray-400 animate-grow-line"></span>

                <ul className="space-y-2 pr-4">
                  {section.articles.map((a: string, articleIndex: number) => {
                    const globalIndex =
                      sections
                        .slice(0, sectionIndex)
                        .reduce((acc, s) => acc + s.articles.length, 0) +
                      articleIndex;

                    const isActive = selectedIndex === globalIndex;

                    return (
                      <li
                        key={articleIndex}
                        onMouseEnter={() => setHoveredIndex(globalIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setSelectedIndex(globalIndex)}
                        className={`relative py-1 cursor-pointer transition ${
                          isActive
                            ? "text-black underline underline-offset-4 font-medium"
                            : "text-gray-700 hover:text-black"
                        }`}
                      >
                        {a}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
