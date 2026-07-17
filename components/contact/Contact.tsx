"use client";

import socials from "@/data/socials.json";
import contactData from "@/data/contact.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  return (
    <>
      <section id="contact" className="inner contact">
        <div className="content__block section-title">
          <p className="h2__subtitle animate-in-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
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
            <span>Contact</span>
          </p>
          <h2 className="h2__title animate-in-up">
            Let&apos;s make something awesome together!
          </h2>
        </div>

        {/* Socials */}
        <div className="content__block grid-block">
          <div className="socials-cards d-flex justify-content-start flex-wrap">
            {socials.map((social, idx) => (
              <div
                key={idx}
                data-delay={0.225 * idx}
                className="socials-cards__item d-flex grid-item-s animate-in-up"
              >
                <div className="socials-cards__card">
                  <i className={social.icon} />
                  <a
                    className="socials-cards__link"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaser */}
        <div className="content__block">
          <div className="teaser">
            <p className="teaser__text animate-in-up">
              Want to know more about me, tell me about your project or just to
              say hello?{" "}
              <a
                className="text-link-bold"
                href="mailto:vrundasuresh@gmail.com?subject=Message%20from%20your%20site"
              >
                Drop me a line{" "}
              </a>
              and I&apos;ll get back as soon as possible.
            </p>
          </div>
        </div>

        {/* Contact lines */}
        <div className="content__block">
          <div className="container-fluid p-0 contact-lines animate-in-up">
            <div className="row g-0 contact-lines__item">
              {contactData.map((item, idx) => (
                <div key={idx} className="col-12 col-md-4 contact-lines__data">
                  <p className="contact-lines__title animate-in-up">
                    {item.title}
                  </p>
                  <p className="contact-lines__text animate-in-up">
                    <a
                      className="text-link-bold"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
}
