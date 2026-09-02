import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Aliffatur Rifki</span>{" "}
            from <span className="purple">Indonesia</span>.
            <br />
            I’m currently a <span className="purple">Student</span> with a
            strong interest in <span className="purple">Web Development</span>.
            <br />
            I enjoy learning new technologies, building things for the web,
            and continuously improving my skills.
            <br />
            <br />
            Outside of coding, I love spending my time with activities that
            keep me curious, active, and motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Web Development 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Japanese Enthusiast 🇯🇵
            </li>
            <li className="about-activity">
              <ImPointRight /> Calisthenics 💪
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and keep growing."
          </p>
          <footer className="blockquote-footer">Aliffatur Rifki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
