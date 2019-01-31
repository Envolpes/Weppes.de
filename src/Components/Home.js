import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import CookieConsent from "react-cookie-consent";
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import  Weppes from'./Pics/Weppes.jpg';
import  Feiern from'./Pics/VorNachWeppes.jpg';
import  Handcrafted from'./Pics/WeppesHandcrafted.jpg';

export default class Home extends React.Component {
	render(){
		return(
			<div>

        <Helmet>
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        </Helmet>

				{/* Hero-Image */}
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Weppes} />

				<div className="HomeText">
					<h1> Natürliche und unweltschonende Herstellung </h1>
				</div>

        {/* CARDS */}
        <div className="Cards">
    		<Container fluid>
					<Row>
						<Col>
						<Fade left delay={400}>
							<Card body className="CardText">
					      <CardBody>
					        <CardTitle tag="h3">Mit Weppes Freude am Feiern</CardTitle>
                  <CardImg top width="100%" src={Feiern} alt="Card image cap" />
					        <CardText>Das macht der Weppes mit dir! Mit Spaß und gutem Gewissen durch den Abend!</CardText>
					      </CardBody>
						  </Card>
							</Fade>
						</Col>
						<Col>
						<Fade left delay={200}>
							<Card body className="CardText">
					      <CardBody>
					        <CardTitle tag="h3">Beim Weppes alles in Handarbeit</CardTitle>
                  <CardImg top width="100%" src={Handcrafted} alt="Card image cap" />
					        <CardText>Beim Weppes wird alles mit der Hand gemacht. Jede einzelne Flasche ist somit ein Unikat.</CardText>
									<CardText></CardText>
					      </CardBody>
						  </Card>
							</Fade>
						</Col>
					</Row>
    		</Container>
        </div>

        <div className="Jumbotron">
          <Jumbotron fluid>
            <Container fluid>
              <Row>
                <Col>
                  <Fade left delay={150}>
                    <i className="fas fa-dumbbell fa-5x"></i> <br/><h2>Nichts für Schwache!<br/> </h2><h3>Hoher Alkoholgehalt. <br/>Rein natürlich.</h3>
                  </Fade>
                </Col>
                <Col>
                  <Fade left delay={200}>
                    <i className="fas fa-user fa-5x"></i> <br/><h2>Wie du es willst! <br/> </h2><h3>Individuell anpassbar. <br/> So individuell wie du es bist!</h3>
                  </Fade>
                </Col>
                <Col>
                  <Fade left delay={250}>
                    <i className="fas fa-hand-holding-heart fa-5x"></i><br/><br/><h2>Gutes Gewissen!<br/> </h2> <h3>Schonend zur Natur und regional hergestellt.</h3>
                  </Fade>
                </Col>
                <Col>
                  <Fade left delay={300}>
                    <i className="fas fa-percent fa-5x"></i><br/><br/><h2>100% investiert!<br/> </h2> <h3> Nichts in die eigene Hosentasche. </h3>
                  </Fade>
                </Col>
              </Row>
            </Container>
      		</Jumbotron>
        </div>


        <div className="CardText">
          <a href="https://www.instagram.com/weppeswein/"> <h1>@WeppesWein · auf Instagram</h1></a>
          <iframe src="https://snapwidget.com/embed/632669" className="snapwidget-widget SnapWidget" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
        </div>



				{/*	Hier wird der Cookie und deren Parameter bestimmt	*/}
				<CookieConsent
		    location="bottom"
        buttonText=<a href="/contact" >Weitere Informationen.</a>
		    cookieName="CookieConsent"
        acceptOnScroll={true}
        acceptOnScrollPercentage={10}
		    style={{ background: "#2B373B" }}
		    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
		    expires={150}>

		    Diese Webseite benutzt Cookies, um die Benutzererfahrung zu verbessern. Indem Sie diese Website nutzen, erklären Sie sich mit dieser Verwendung einverstanden.
				</CookieConsent>
			</div>
		);
	}
}
