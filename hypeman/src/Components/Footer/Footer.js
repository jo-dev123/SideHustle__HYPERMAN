import React from "react";
import { Col, Container, Row, Button } from "reactstrap";
import styler from "../../style/sheet.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <footer>
            <p className={styler.cout}>
              Nigeria <hr />
            </p>
            <p className={styler.carbon}>
              <a href='#!' className={styler.footer_carbon}>
                
                Carbon neutral since 2007
              </a>
            </p>
            <nav className={styler.foot_nav}>
              <ul className={styler.the_ul}>
                <li>
                  <a href='#!'>About</a>
                </li>
                <li>
                  <a href='#!'>Advertising</a>
                </li>
                <li>
                  <a href='#!'>Business</a>
                </li>
                <li>
                  <a href='#!'>How Search works</a>
                </li>
                <li>
                  <a href='#!'>Privacy</a>
                </li>
                <li>
                  <a href='#!'>Terms</a>
                </li>
                <li>
                  <a href='#!'>Settings</a>
                </li>
              </ul>
            </nav>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
