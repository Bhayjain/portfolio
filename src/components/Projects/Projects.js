import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hatmi"
              description="The Hatimi Hotel Management Project involved developing a comprehensive hotel management system aimed at streamlining operations and enhancing user experience. The project focused on creating a robust admin-side interface and integrating essential features for efficient hotel management."
              ghLink="https://github.com/Bhayjain/hatmi.git"
              demoLink="https://hatimiretreats.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="GoodVibes"
              description="GoodVibes is a dynamic and responsive application designed to promote positive content and enhance user engagement. The project involved creating a user-friendly platform where users could interact with uplifting content and benefit from a personalized experience."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://goodvibeswithin.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Book Your Insurance"
              description="Book Your Insurance is a comprehensive insurance booking system designed to facilitate clients in booking various types of insurance, including health and car insurance. The platform provides a seamless user experience with efficient data management and responsive design."
              ghLink="https://github.com/Bhayjain/insurance.git"
              demoLink="https://web.bookyourinsurance.com/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
