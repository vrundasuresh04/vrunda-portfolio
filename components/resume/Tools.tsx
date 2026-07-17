import tools from "@/data/tools.json";
import Image from "next/image";

export default function Tools() {
  return (
    <>
      {/* Content Block - H3 Block Start */}
      <div className="content__block">
        <div className="section-h3 section-h3-grid">
          <h3 className="h3__title animate-in-up">My favourite tools</h3>
        </div>
      </div>
      {/* Content Block - H3 Block End */}
      {/* Content Block - Tools List Start */}
      <div className="content__block grid-block block-large">
        {/* Tools List Start */}
        <div className="tools-cards d-flex justify-content-start flex-wrap">
          {tools.map((tool, idx) => (
            <div
              className="tools-cards__item d-flex grid-item-s animate-card-5"
              key={idx}
            >
              <div className="tools-cards__card">
                <Image
                  className="tools-cards__icon animate-in-up"
                  alt={tool.alt}
                  src={tool.src}
                  width={120}
                  height={90}
                />
                <h6 className="tools-cards__caption animate-in-up">
                  {tool.caption}
                </h6>
              </div>
            </div>
          ))}
        </div>
        {/* Tools List End */}
      </div>
      {/* Content Block - Tools List End */}
    </>
  );
}
