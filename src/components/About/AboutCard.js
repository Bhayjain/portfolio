import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do! */}
           Hi Everyone, I am <span className="purple">Abhay Jain </span>, a Web Developer from <span className="purple"> Nagpur, Maharashtra,</span>
             with a Master's degree in MCA and 1 year of professional experience, 
             including roles as a Front End Developer during my studies. 
            I specialize in <span className="purple">  React.js and Node.js,</span> and I am proficient in 
            <span className="purple">  JavaScript, Express, MongoDB, HTML5, CSS, and Bootstrap.</span> My development experience includes
          </p>
          <ul style={{paddingLeft:"5px"}}>
            <li className="about-activity">
              <ImPointRight />            <span className="purple"> Book Your Insurance:</span> A platform for managing insurance bookings .
            </li>
            <li className="about-activity"> 
              <ImPointRight />            <span className="purple"> Hatmo Hotel:</span> A solution for hotel management and reservations.
            </li>
            <li className="about-activity">
              <ImPointRight />            <span className="purple"> GoodVibes:</span> A health-oriented application promoting well-being.
            </li>
            <li className="about-activity">
              <ImPointRight />            <span className="purple"> Chat Application:</span> A real-time chat app featuring dynamic messaging.

            </li>
          </ul>



          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">AbhayJain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
