import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/3-D cloth.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/Crypto.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Ed-tech.png";
// import  Ed-tech from "../../Assets/Projects/Ed-tech.png";
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
              title="Pexel-chat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends and integrated with AI for chat summary and question answering to enhance user experience using Cohere API build with react.js, Daisyui, MongoDb , Express. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Deepank-01/Pixeltalk-Front-end"
              demoLink="https://pixeltalk-front-end-deepank.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pathshala- Edtech Platform"
              description="EdTech website using React.js and Express.js, featuring 3 user portals (teachers, students, and admins), with
robust authentication and authorization mechanisms for students and instructors, supporting  courses with video lectures and notes pdf.Integrated Razorpay SDK to handle all types of payments, including UPI, credit cards, and debit cards, ensuring secure and
seamless payment transfers."
              ghLink="https://github.com/Deepank-01/Pathsala-frontend "
              demoLink="https://pathsala-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cryto Tracker"
              // description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              description="a React app utilizing the CoinGecko API to display real-time cryptocurrency price data, including profit/loss and also 
              developed indicators and a line graph via react-chartjs to furnish visual analytics through an intuitive interface and fortified user authentication."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://github.com/Deepank-01/Crypto_Bazzer?tab=readme-ov-file"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="3-D Sheet Customizer"
              description="Created an interactive 3D web app with Three.js, allowing users to customize shirts and enhancing the virtual shopping"
              ghLink="https://github.com/Deepank-01/Threejs_clothing"
              demoLink="https://3-dclothing.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
