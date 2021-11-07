import React, { useState } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import styler from "../../style/sheet.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../img/google_logo.png";
import voice from "../../img/google_voice.png";
import sidehustle from "../../img/sidehustle_logo.png";


const Body = () => {
    
        const [textstate, setTextstate] = useState('');
      
        const textHandler = (e) => {
          setTextstate(e.target.value);
        };
     
  return (
    <Container>
      <Row>
        <Col>
          <section>
            <div className={styler.form}>
              <div className={styler.comp_logo}>
               {textstate?<p>{textstate}</p> : <img
                  src={sidehustle}
                  alt='google logo'
                  className={styler.sidelogo}
                />}
              </div>
              <form action=''>
                <div className={styler.inner_input}>
                  <span className={styler.icon}>
                    <i className='fas fa-search'></i>
                  </span>
                  <input type='text' onChange={textHandler} />
                  <span className={styler.icon}>
                    <img
                      src={voice}
                      alt='google voice'
                      title='Credit:pngegg'
                      className={styler.voice}
                    />
                  </span>
                  <br />
                </div>
                <div className={styler.btns}>
                  <button type='submit'>Google Search</button>{" "}
                  <button type='submit'>I'm Feeling Lucky</button>
                </div>
              </form>
              <p className={styler.lang}>
                Google offered in: <a href='#!'> Hausa </a>
                <a href='#!'> Igbo </a> <a href='#!'> Èdè Yorùbá </a>{" "}
                <a href='#!'> Nigerian Pidgin </a>
              </p>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
