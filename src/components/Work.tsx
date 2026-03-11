import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Frontend Deployment Build Using Maven with CI/CD On Azure (06/2025)",
    category: "CI/CD Pipeline — Azure DevOps",
    description: [
      "Developed and deployed a Frontend Application Using Maven as the Build Automation.",
      "Designed and Implemented a CI/CD Pipeline in Azure DevOps to automate Build, Test, and Deployment Stages.",
      "Integrated GitHub with Azure Pipelines to trigger builds on Code Commits.",
      "Deployed the Application on Azure Kubernetes Services (AKS) Using Containerized Workloads."
    ],
    image: "/images/project1.png",
  },
  {
    title: "Deployment of Three-Tier Application on AKS Using Pipelines (08/2025)",
    category: "Kubernetes Deployment — Azure DevOps",
    description: [
      "Built a Complete Three-tier Architecture (Frontend, Backend, Database) and Implemented full CI/CD Pipelines Using Azure DevOps.",
      "Containerized each Tier Using Docker, Stored Images in ACR, and orchestrated deployments on Azure Kubernetes Services (AKS).",
      "Automated Environment Provisioning Using YAML Pipelines and Kubernetes manifests, (Deployments, Services, ConfigMaps, Secrets).",
      "Integrated Monitoring and logging Using Azure Monitor."
    ],
    image: "/images/project2.png",
  },
  {
    title: "Deployment of Three-Tier Application Using Python (Flask) (09/2025)",
    category: "Containerized Microservices",
    description: [
      "Developed a Three-Tier Web Application with React.js as Frontend and Flask (Python) as Backend with database integration managed in backend services.",
      "Containerized the complete application using Docker to ensure portability, consistency, and efficient deployment across environments.",
      "Designed and structured backend services to handle database connectivity, request handling, and API communication securely and efficiently.",
      "Integrated Monitoring and logging Using Azure Monitor."
    ],
    image: "/images/project3.png",
  },
  {
    title: "Deployment of Three-Tier Application Using GitHub CI/CD (11/2025)",
    category: "Automated Deployment — GitHub Actions",
    description: [
      "Implemented GitHub Actions–based CI/CD pipelines to automate build and deployment workflows for both frontend and backend.",
      "Configured pipelines to trigger on every push, performing NuGet restore, MSBuild compilation, and validation steps.",
      "Deployed Next.js frontend and .NET backend APIs to Azure App Service, ensuring reliable and scalable hosting.",
      "Used secure publish profiles, secrets management, and environment configurations to enable safe, production-ready deployments."
    ],
    image: "/images/project4.png",
  },
];


const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Project Highlights</span>
                          <ul className="project-highlight-list">
                            {project.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
