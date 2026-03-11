import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science</h4>
                <h5>Saveetha School of Engineering</h5>
              </div>
              <h3>2021–2025</h3>
            </div>
            <p>
              Graduated with a CGPA of 8.4. Gained strong foundations in
              computer science, operating systems, networking, and cloud
              technologies. Actively worked on DevOps and cloud projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Intern</h4>
                <h5>Cloud & Infrastructure Practice</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Managed infrastructure as code with Ansible playbooks on AWS and
              Azure. Integrated Ansible with CI/CD pipelines. Worked with
              Kubernetes namespaces, PVs, PVCs, and Ingress Controllers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps & Cloud Engineer</h4>
                <h5>Azure DevOps Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building and deploying three-tier applications on AKS using Azure
              Pipelines, Docker, and Terraform. Implementing CI/CD pipelines
              with GitHub Actions and Azure DevOps for automated delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
