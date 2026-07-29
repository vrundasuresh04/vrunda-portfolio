"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import portfolioItems from "@/data/portfolios.json";
import Lightbox, { FullscreenRef } from "yet-another-react-lightbox";
import {
  Captions,
  Fullscreen,
  Share,
  Zoom,
} from "yet-another-react-lightbox/plugins";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const captionsRef = useRef(null);
  const fullscreenRef = useRef<FullscreenRef>(null);
  const zoomRef = useRef(null);

  return (
    <>
      <section id="portfolio" className="inner inner-first portfolio">
        {/* Content Block - H2 Section Title Start */}
        <div className="content__block section-grid-title">
          <p className="h2__subtitle animate-in-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="13px"
              height="13px"
              viewBox="0 0 13 13"
              fill="currentColor"
            >
              <path
                fill="currentColor"
                d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
            C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
            C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
              />
            </svg>
            <span>Portfolio</span>
          </p>
          <h2 className="h2__title animate-in-up">
            Check out my featured projects
          </h2>
        </div>
        {/* Content Block - H2 Section Title End */}
        {/* Content Block - Works Gallery Start */}
        <div className="content__block grid-block">
          <div className="container-fluid px-0 inner__gallery">
            <div
              className="row gx-0 my-gallery"
              itemType="http://schema.org/ImageGallery"
            >
              {portfolioItems.map((item, idx) => (
                <figure
                  key={idx}
                  className="col-12 col-md-6 gallery__item grid-item animate-in-up"
                  itemProp="associatedMedia"
                  itemType="http://schema.org/ImageObject"
                  data-delay={idx % 2 ? "0.3" : "0"}
                >
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                      setActiveIndex(idx);
                    }}
                    href={item.href}
                    className="gallery__link"
                    itemProp="contentUrl"
                    data-size={`${item.width}x${item.height}`}
                  >
                    <Image
                      className="gallery__image"
                      itemProp="thumbnail"
                      alt={item.alt}
                      src={item.src}
                      width={800}
                      height={800}
                    />
                    <div
                      className="picture"
                      style={{
                        backgroundImage: `url(${item.src})`,
                      }}
                    />
                    <figcaption
                      className={item.figcaptionClass}
                      itemProp="caption description"
                    >
                      <h5 className={item.titleClass}>{item.title}</h5>
                      <div className="card__tags d-flex flex-wrap">
                        {item.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className={tag.className}>
                            {tag.text}
                          </span>
                        ))}
                      </div>
                      <p className="small">{item.description}</p>
                    </figcaption>
                  </a>

                  <div className="portfolio__project-name" style={{ marginTop: "1.5rem", paddingLeft: "0.5rem" }}>
                    <h5 style={{ fontWeight: 600, fontSize: "2rem", color: "var(--t-bright)" }}>
                      {item.title}
                    </h5>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
        {/* Content Block - Works Gallery End */}
      </section>

      <Lightbox
        open={open}
        plugins={[Captions, Fullscreen, Share, Zoom]}
        captions={{
          ref: captionsRef,
          descriptionTextAlign: "center",
        }}
        className="yarl__portfolio"
        fullscreen={{ ref: fullscreenRef }}
        on={{
          click: () => fullscreenRef.current?.enter(),
        }}
        render={{
          slideContainer: ({ slide, children }) => {
            const item = portfolioItems.find(
              (el) => el.title === slide.title
            );
            const tags = item?.tags;
            const projectUrl = item?.projectUrl;
            return (
              <div className="d-flex flex-column">
                {children}

                <div className="pswp__caption" style={{ position: "static" }}>
                  <div className="pswp__caption__center">
                    <h5>{slide.title}</h5>
                    <div className="card__tags d-flex flex-wrap">
                      {tags?.map((tag, i) => (
                        <span key={i} className="rounded-tag opposite">
                          {tag.text}
                        </span>
                      ))}
                    </div>
                    <p className="small">{slide.description}</p>
                    {projectUrl && (
                      <div className="mt-3 text-center">
                        <a
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-default btn-hover btn-hover-accent"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 24px",
                            fontSize: "1.4rem",
                            borderRadius: "30px",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            letterSpacing: "0.5px"
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          <span>View Code on GitHub</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          },
        }}
        zoom={{ ref: zoomRef }}
        close={() => setOpen(false)}
        index={activeIndex}
        slides={portfolioItems.map((item) => ({
          src: item.src,
          title: item.title,
          description: item.description,
          imageFit: "contain",

          share: {
            url: "/",
            title: item.title,
            description: item.description,
          },
        }))}
      />
    </>
  );
}
