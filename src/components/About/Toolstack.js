import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaFirefoxBrowser, FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows fontSize={"4.5em"} />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFirefoxBrowser fontSize={"4.5em"} />
        <div className="tech-icons-text">Firefox</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub fontSize={"4.5em"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode fontSize={"4.5em"} />
        <div className="tech-icons-text">VS Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
