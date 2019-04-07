import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import CookieConsent from "react-cookie-consent";
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import  Weppes from'./Pics/Weppes.jpg';
import  Feiern from'./Pics/VorNachWeppes.jpg';
import  Handcrafted from'./Pics/WeppesHandcrafted.jpg';
import Rene from'./Pics/Rene.jpg';
import FounderChrisMichael from'./Pics/FounderChrisMichael.jpg';
import FounderFlorian from'./Pics/FounderFlorian.jpg';
import Fass from './Pics/FlascheFass.jpg';

export default class Home extends React.Component {

  componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
			<div style={{background:"#212121"}}>

        {/*  Headerfür Metatags und laden des Skripts für Instagramm */}
        <Helmet>
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        </Helmet>

				{/* Hero-Image */}
				<LazyHero color = "#000000" parallaxOffset="50" minHeight='100vh' opacity ="0.4" imageSrc={Weppes} />

				<div className="H1-Titel">
					<h1> Natürliche und unweltschonende Herstellung </h1><br/>
          <h2> sind nur zwei von vielen guten Gründen, den Weppes zu probieren!</h2>
				</div>

        <Row noGutters="true" className="Sup2">
          <Col lg={{ size:6, order: 1}} md={{size:12, order:1}} sm={{size:12, order:2}} xs={{size:12, order:2}}>
            <Card >
              <img src={Fass} className="img-fluid" alt="" />
            </Card>
          </Col>
          <Col lg={{ size:6, order: 2}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
            <div className="CardBlock">
              <h3> Der Apfelwein / De Äppelwoi</h3>

              Womit alles gestartet hat, der Apfelwein. <br/>
              Aus einem Experiment wurde der Weppes.
              Naturtrüb, Handerlesen und regional Angebaut,
              ist dieser so umweltschonend wie möglich hergestellt worden. Ohne künstlichen Zusätze, für veganen Verzehr geeignet, ist er mit großer Rücksicht für die Natur und Umwelt enstanden. Er ist die Grundlage für alle anderen, auf den Apfelwein basierenden Getränke, wie zum Beispiel: <br/>
              •	Der Weppes Cider <br/>
              •	Der Weppes Glühapfelwein mit Zimt & Zucker <br/>
            </div>
            </Col>
          </Row>


        {/* CARDS */}
        <div className="Cards">
    		<Container fluid>
					<Row>
						<Col lg={{ size:6}} md={{size:12}} sm={{size:12}} xs={{size:12}}>>
						<Fade left delay={400}>
							<Card body className="CardText">
					      <CardBody>
					        <CardTitle tag="h3">Mit Weppes Freude am Feiern</CardTitle>
                  <img width="100%" src={Feiern} alt="Card image cap" />
					        <CardText>Das macht der Weppes mit dir! <br/>Mit Spaß und gutem Gewissen durch den Abend!</CardText>
					      </CardBody>
						  </Card>
							</Fade>
						</Col>
						<Col lg={{ size:6}} md={{size:12}} sm={{size:12}} xs={{size:12}}>>
						<Fade left delay={200}>
							<Card body className="CardText">
					      <CardBody>
					        <CardTitle tag="h3">Beim Weppes ist alles in Handarbeit</CardTitle>
                  <img width="100%" src={Handcrafted} alt="Card image cap" />
					        <CardText>Beim Weppes wird alles mit der Hand gemacht. <br/>Jede einzelne Flasche ist somit ein Unikat.</CardText>
					      </CardBody>
						  </Card>
							</Fade>
						</Col>
					</Row>
    		</Container>
        </div>



        <div className="Jumbotron">
          <Jumbotron fluid className="Jumbotron">
            <Container fluid>
              <Row style={{padding:"2%"}}>
                <Col lg={{ size:3}} md={{size:12}} sm={{size:12}} xs={{size:12}}>
                  <Fade left delay={150}>
                    <i className="fas fa-dumbbell fa-5x" style={{padding:"2%"}}></i> <br/><h2>Nichts für Schwache!<br/> </h2><h3>Hoher Alkoholgehalt. <br/>Rein natürlich.</h3>
                  </Fade>
                </Col>
                <Col lg={{ size:3}} md={{size:12}} sm={{size:12}} xs={{size:12}}>
                  <Fade left delay={200}>
                    <i className="fas fa-user fa-5x" style={{padding:"2%"}}></i> <br/><h2>Wie du es willst! <br/> </h2><h3>Individuell anpassbar. <br/> So individuell wie du es bist!</h3>
                  </Fade>
                </Col>
                <Col lg={{ size:3}} md={{size:12}} sm={{size:12}} xs={{size:12}}>
                  <Fade left delay={250}>
                    <i className="fas fa-hand-holding-heart fa-5x" style={{padding:"2%"}}></i><br/><br/><h2>Gutes Gewissen!<br/> </h2> <h3>Schonend zur Natur und regional hergestellt.</h3>
                  </Fade>
                </Col>
                <Col lg={{ size:3}} md={{size:12}} sm={{size:12}} xs={{size:12}}>
                  <Fade left delay={300}>
                    <i className="fas fa-percent fa-5x" style={{padding:"2%"}}></i><br/><br/><h2>100% investiert!<br/> </h2> <h3> Nichts in die eigene Hosentasche. </h3>
                  </Fade>
                </Col>
              </Row>
            </Container>
      		</Jumbotron>
        </div>



        <div className=" Sup1">
          <a href="https://www.instagram.com/weppeswein/"> <h1 className="H1-Titel Sup1">@WeppesWein · auf Instagram</h1></a>
          <iframe src="https://snapwidget.com/embed/632669" className="snapwidget-widget SnapWidget" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
        </div>

        <h1 className="H1-Titel Sup1"> Meine bereits überzeugten Unterstützer: </h1>

        <Carousel className="CustCarousel" showThumbs={false} showStatus={false} dynamicHeight ={true} infiniteLoop={true} autoPlay={true} interval={4000} stopOnHover={false}>

                <div>
                    <img src={Rene} />
                    <p className="legend">Founder Rene</p>
                </div>
                <div>
                    <img src={FounderChrisMichael} />
                    <p className="legend">Founder Chris und Michael</p>
                </div>
                <div>
                    <img src={FounderFlorian} />
                    <p className="legend">Founder Florian</p>
                </div>
            </Carousel>



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
