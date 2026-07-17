import achievements from "@/data/facts.json";
import services from "@/data/services.json";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="inner about">
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
          <span>About Me</span>
        </p>

        <h2 className="h2__title animate-in-up">
          Turning complex problems into elegant AI & Web solutions
        </h2>
      </div>
      {/* Content Block - H2 Section Title End */}
      {/* Content Block - Achievements Start */}
      <div className="content__block grid-block">
        <div className="achievements d-flex flex-column flex-md-row align-items-md-stretch">
          {achievements.map(
            (item: { number: number; descr: string }, idx: number) => (
              <div
                key={idx}
                className="achievements__item d-flex flex-column grid-item animate-card-3"
              >
                <div className="achievements__card">
                  <p className="achievements__number">{item.number}+</p>
                  <p className="achievements__descr">{item.descr}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* Content Block - Achievements End */}
      {/* Content Block - About Me Data Start */}
      <div className="content__block grid-block block-large">
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-between">
            {/* About Me Description Start */}
            <div className="col-12 col-xl-8 grid-item about-descr">
              <p className="about-descr__text animate-in-up">
                I am an MCA student specializing in Artificial Intelligence and Machine Learning with hands-on experience in building scalable web applications and deep learning models. I enjoy building intelligent computer vision pipelines, predictive ML systems, and responsive web applications utilizing modern tools like React, Flask, and the MERN stack.
              </p>{" "}
              <p className="about-descr__text animate-in-up">
                Driven by curiosity and a passion for engineering, my goal is to bridge the gap between complex data analysis and intuitive, user-friendly digital experiences. I am actively seeking a Software or Data Internship to apply my skills and gain practical industry experience in a professional environment.
              </p>{" "}
              <div className="btn-group about-descr__btnholder animate-in-up">
                <a
                  className="btn mobile-vertical btn-default btn-hover btn-hover-accent"
                  href="/resume-sample.pdf"
                  download
                  target="_blank"
                >
                  <span className="btn-caption">Download CV</span>
                  <i className="ph-bold ph-download-simple" />
                </a>
              </div>
            </div>
            {/* About Me Description End */}
            {/* About Me Information Start */}
            <div className="col-12 col-xl-4 grid-item about-info">
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Name</small>
                  Vrunda S
                </h6>
              </div>
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Phone</small>
                  <a className="text-link-bold" href="tel:+918088090791">
                    +91-8088090791
                  </a>
                </h6>
              </div>
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Email</small>
                  <a
                    className="text-link-bold"
                    href="mailto:vrundasuresh@gmail.com?subject=Message%20from%20your%20site"
                  >
                    vrundasuresh@gmail.com
                  </a>
                </h6>
              </div>
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Location</small>
                  <a
                    className="text-link-bold"
                    href="https://maps.app.goo.gl/83wD55M3gX2J7h1e7"
                    target="_blank"
                  >
                    Bangalore, India
                  </a>
                </h6>
              </div>
            </div>
            {/* About Me Information End */}
          </div>
        </div>
      </div>
      {/* Content Block - About Me Data End */}
      {/* Content Block - Services Start */}
      <div className="content__block grid-block">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-stretch cards">
            {services.map(
              (
                service: {
                  title: string;
                  tags: string[];
                  text: string;
                  img: string;
                },
                idx: number
              ) => (
                <div
                  key={idx}
                  className="col-12 col-md-6 cards__item grid-item animate-card-2"
                >
                  <div className="cards__card d-flex flex-column">
                    <div className="cards__descr">
                      <h4 className="cards__title animate-in-up">
                        {service.title}
                      </h4>
                      <div className="cards__tags d-flex flex-wrap animate-in-up">
                        {service.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="rounded-tag tag-outline"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="small cards__text animate-in-up">
                        {service.text}
                      </p>
                    </div>
                    <div className="cards__image d-flex animate-in-up">
                      <Image
                        alt="Service/Feature Image"
                        src={service.img}
                        width={1200}
                        height={900}
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* Content Block - Services End */}
    </section>
  );
}
