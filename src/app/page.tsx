"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { FaGithub, FaEnvelope, FaTimes, FaAdjust } from "react-icons/fa";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contrast, setContrast] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  // dark theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", contrast);
  }, [contrast]);

  // modal toggles
  const toggleModal = () => setIsModalOpen((o) => !o);
  const toggleContrast = () => setContrast((c) => !c);

  // contact form
  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const loading = document.querySelector<HTMLElement>(
      ".modal__overlay--loading"
    )!;
    const success = document.querySelector<HTMLElement>(
      ".modal__overlay--success"
    )!;
    loading.classList.add("modal__overlay--visible");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "Email service unavailable. Please email me directly at asv00.dev@gmail.com"
        );
      });
  };

  return (
    <>
      {/* <section
        id="landing-page"
        className={`${contrast ? "dark-theme" : ""} ${
          isModalOpen ? "modal__open" : ""
        }`}
      > */}
      <section
        id="landing-page"
        className={isModalOpen ? "modal__open" : ""}
      >
        {/* NAV */}
        <nav>
          <figure>
            <Image src="/logo_black.png" alt="logo" width={80} height={50} />
          </figure>
          <ul className="nav__link--list">
            <li className="nav__link" onClick={toggleModal}>
              <a className="nav__link--anchor link__hover-effect link__hover-effect--black">
                about
              </a>
            </li>
            <li className="nav__link">
              <a
                href="#projects"
                className="nav__link--anchor link__hover-effect link__hover-effect--black"
              >
                projects
              </a>
            </li>
            <li className="nav__link" onClick={toggleModal}>
              <a className="nav__link--anchor link__hover-effect link__hover-effect--black">
                contact
              </a>
            </li>
            <li className="nav__link" onClick={toggleContrast}>
              <a className="nav__link--anchor link__hover-effect--black">
                <FaAdjust size={20} />
              </a>
            </li>
          </ul>
        </nav>

        {/* HEADER */}
        <header className="header">
          <div className="header__content">
            <h1 className="title">Hi,</h1>
            <h1 className="title cool-grey">I&apos;m Austin.</h1>
            <p className="header__para">
              I develop in-depth applications—and I&apos;m looking forward to
              exploring <b className="cool-grey">AI</b>, security, and whatever
              comes next.
              <br />
              Here&apos;s more{" "}
              <b className="cool-grey click" onClick={toggleModal}>
                about me
              </b>
              .
            </p>
            <div className="social__list">
              <a
                href="https://github.com/austinst0ller"
                target="_blank"
                className="social__tag click"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </header>

        {/* MAIL BTN */}
        <button className="mail__btn click" onClick={toggleModal}>
          <FaEnvelope size={24} />
        </button>

        {/* SCROLL DOWN */}
        <a href="#projects" className="scroll">
          <div className="scroll__icon click"></div>
        </a>

        {/* MODAL */}
        <div className="modal">
          <div className="modal__half modal__about">
            <h3 className="modal__title modal__title--about">
              Here&apos;s a bit about me.
            </h3>
            <h4 className="modal__sub-title modal__sub-title--about">
              Autodidactic Software Engineer & Lifelong Learner
            </h4>
            <p className="modal__para">
              I&apos;m a self-taught software engineer passionate about building
              innovative applications. I thrive on challenges and am always
              eager to learn new technologies. My journey began with C++ and
              Java, and today I specialize in Next.js and TypeScript.
              <br />
              Looking ahead, I&apos;m excited to explore emerging domains like
              large language models, AI, security, and system design.
            </p>
            {/* Languages grid… */}
          </div>
          <div className="modal__half modal__contact">
            <FaTimes
              className="modal__exit click"
              size={28}
              color="#fff"
              role="button"
              aria-label="Close modal"
              onClick={toggleModal}
            />
            <h3 className="modal__title modal__title--contact">
              Let&apos;s Connect!
            </h3>
            <h4 className="modal__sub-title modal__sub-title--contact">
              I&apos;m currently open for new opportunities.
            </h4>
            <form id="contact__form" onSubmit={handleContact}>
              <div className="form__item">
                <label className="form__item--label">Name</label>
                <input
                  className="input"
                  name="user_name"
                  type="text"
                  required
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Email</label>
                <input
                  className="input"
                  name="user_email"
                  type="email"
                  required
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Message</label>
                <textarea className="input" name="message" required />
              </div>
              <button id="contact__submit" className="form__submit">
                Send it <i className="fas fa-arrow-circle-up"></i>
              </button>
            </form>
            <div className="modal__overlay modal__overlay--loading">
              <i className="fas fa-spinner"></i>
            </div>
            <div className="modal__overlay modal__overlay--success">
              Thanks for the message! <br /> I&apos;m looking forward to
              speaking soon.
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <h1 className="section__title">
            Here are some of my <span className="cool-grey">projects</span>.
          </h1>

          <ul className="project__list">
            {/* Horizon Banking */}
            <li className="project__item">
              <h2 className="project__title">Horizon Banking</h2>
              <p className="project__description">
                A full-stack, modern financial SaaS platform built with Next.js
                and TypeScript that makes managing money simple, secure, and
                insightful.
              </p>

              <h3 className="project__sub-title">
                Tech Stack &amp; Integrations
              </h3>
              <ul className="project__features">
                <li>Next.js &amp; TypeScript</li>
                <li>Appwrite (Auth + Database)</li>
                <li>Plaid (Real-time account linking)</li>
                <li>Dwolla (Peer-to-peer transfers)</li>
                <li>React Hook Form &amp; Zod (Type-safe forms)</li>
                <li>Tailwind CSS &amp; ShadCN (Responsive UI)</li>
                <li>Sentry (Error tracking + performance)</li>
              </ul>

              <h3 className="project__sub-title">Key Features</h3>
              <ul className="project__features">
                <li>
                  <strong>Secure Auth Flows</strong>: Cookie-based sessions with
                  role-based access.
                </li>
                <li>
                  <strong>Multi-Bank Linking</strong>: Aggregate balances from
                  multiple institutions via Plaid.
                </li>
                <li>
                  <strong>Transaction History</strong>: Paginated, filterable
                  transaction lists synced in real-time.
                </li>
                <li>
                  <strong>Funds Transfer</strong>: Seamless peer-to-peer
                  payments using Dwolla.
                </li>
                <li>
                  <strong>Spending Analytics</strong>: Interactive charts to
                  help users budget smarter.
                </li>
              </ul>

              <a
                href="https://github.com/austinst0ller/banking"
                target="_blank"
                rel="noopener noreferrer"
                className="project__link"
              >
                View on GitHub
              </a>
            </li>

            {/* Netflix Clone */}
            <li className="project__item">
              <h2 className="project__title">Netflix Clone</h2>
              <p className="project__description">
                A responsive streaming-service UI built with Next.js and
                TypeScript that replicates Netflix&apos;s core experience—browse
                trending shows, view details, and curate your own watchlist.
                Content is fetched live from The Movie Database API.
              </p>

              <h3 className="project__sub-title">
                Tech Stack &amp; Integrations
              </h3>
              <ul className="project__features">
                <li>Next.js &amp; TypeScript</li>
                <li>Firebase (Authentication &amp; Firestore)</li>
                <li>The Movie Database API (TMDB)</li>
                <li>React Context + Zustand (State Management)</li>
                <li>Tailwind CSS (Utility-first styling)</li>
                <li>React Player (Embedded trailers)</li>
              </ul>

              <h3 className="project__sub-title">Key Features</h3>
              <ul className="project__features">
                <li>Dynamic routes for movie &amp; show detail pages</li>
                <li>User sign-in &amp; personalized watchlists</li>
                <li>
                  Responsive grid layouts with mobile &amp; desktop breakpoints
                </li>
                <li>Dark mode toggle &amp; smooth CSS transitions</li>
                <li>Server-side rendering (SSR) for fast initial load</li>
                <li>Real-time search with debouncing and pagination</li>
              </ul>

              <a
                href="https://github.com/austinst0ller/NetflixClone"
                target="_blank"
                rel="noopener noreferrer"
                className="project__link"
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
