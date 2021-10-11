import React from "react";
import { Helmet } from "react-helmet";
import { ReactComponent as HeroSvg } from "../../assets/images/design-page/hero.svg";
import projectImage1 from "../../assets/images/design-page/flower.jpg";
import "./design.css";

const PageContainer = ({ children }) => {
  return <div className="page-container">{children}</div>;
};

const Hero = () => (
  <div className="design-hero">
    <div className="design-hero-text">
      <h1>
        I'm <span className="purple">John Doe</span>.
      </h1>
      <h1>I design stuff.</h1>
      <div className="pt-5">Currently doing this.</div>
      <div>And also that.</div>
    </div>
    <HeroSvg className="design-hero-image"></HeroSvg>
  </div>
);

const StatementSection = () => {
  const ListItem = ({ number, text }) => (
    <div>
      <span className="purple">
        [ <span>{number}</span> ]
      </span>{" "}
      {text}
    </div>
  );

  const Projects = () => (
    <div className="design-statement-item">
      <div>Observe</div>
      <h1 className="pt-half">My Projects.</h1>
      <div className="pt-1 purple">
        Write something interesting below to sum up your project examples.
      </div>
      <div className="pt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="pt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  );

  const Process = () => (
    <div className="design-statement-process design-statement-item">
      <div>Fathom</div>
      <h1 className="pt-half">My Process</h1>
      <div className="pt-1 purple">
        Write something interesting below about how you approach your projects.
      </div>
      <div className="pt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="pt-1">
        <ListItem number={1} text="lists can be" />
        <ListItem number={2} text="a great way" />
        <ListItem number={3} text="to convey information" />
      </div>
    </div>
  );

  return (
    <div className="design-statement pt-5">
      <Projects />
      <Process />
    </div>
  );
};

const ProjectsSection = () => {
  const Item = () => {
    return (
      <div className="design-project-item">
        <div>Project name</div>
        <div>tag | another tag | another tag</div>
        <img
          className="design-project-item-image"
          alt="project"
          src={projectImage1}
        ></img>
        <div>
          Add one or two sentences here to describe the project. Avoid lengthy
          descriptions.
        </div>
      </div>
    );
  };

  return (
    <div className="pt-5 design-project">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

const Designs = () => {
  return (
    <div>
      <Helmet>
        <title>John Doe | Education</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="free portfolio template,portfolio template, portfolio website template, open source, open sourcing, contributing to open source"
        />
        <meta
          name="description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="AdsBot-Google" content="index,follow" />
        <meta
          property="og:site_name"
          content="https://portfolio.smaranjitghose.codes/education.html"
        />
        <meta property="og:title" content="John Doe | Education" />
        <meta
          property="og:description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio.smaranjitghose.codes/education.html"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="John Doe | Education" />
        <meta
          name="twitter:description"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
        <meta
          name="twitter:url"
          content="https://portfolio.smaranjitghose.codes/education.html"
        />
        <meta name="application-name" content="John Doe | Education" />
        <meta
          name="apple-mobile-web-app-title"
          content="John Doe | Education"
        />
        <meta
          name="summary"
          content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world."
        />
      </Helmet>
      <PageContainer>
        <Hero />
        <hr className="design-hr purple" />
        <StatementSection />
        <hr className="design-hr purple mt-4" />
        <ProjectsSection />
        <h1>↓ SCROLL DOWN FOR MORE ↓</h1>
      </PageContainer>
    </div>
  );
};

export default Designs;