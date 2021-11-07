import React from "react";
import { Col, Container, Row, Button } from "reactstrap";
import styler from "../../style/sheet.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <nav className={`${styler.top_nav}`}>
            <ul>
              <li className={`${styler.top_link} ${styler.all_nav}`}>
                <a href='#!'>Gmail</a>
              </li>
              <li className={`${styler.top_link} ${styler.all_nav}`}>
                <a href='#!'>Images</a>
              </li>
              <li className={`${styler.all_nav}`}>
                <a href='#!' class='hover_link'>
                  <i class='fas fa-th'></i>
                </a>
              </li>
              <li className={`${styler.x} ${styler.all_nav}`}>
                <a href='#!' class='hover_link'>
                  <i class='fas fa-user-circle'></i>
                </a>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
