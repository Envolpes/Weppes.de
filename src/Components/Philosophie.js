import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import Fade from 'react-reveal/Fade';

import './Home.css';
import Picture from'./Pics/Apfelwagen.jpg';

export default class Philo extends React.Component {

  componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
  		<div >
				{/* Hero Image*/}
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}>
				</LazyHero>

        {/* H1 Titeltextseite*/}
        <div className="H1-Titel">
          <h1> Warum Weppes</h1><br/>
          <h2> Einige gute Grunde, sich für den Weppes zu begeistern:</h2>
        </div>

        {/* Beginn Icons*/}
				<Container fluid>

        <Jumbotron className="Jumbotron">
        {/* ROW HANTEL*/}
          <Fade left delay={150}>
					  <Row className="Philosophie">
  						<Col xl="3">
  							<i className="fas fa-dumbbell fa-5x"></i> <br/><h2>Nichts für Schwache!<br/> </h2>
  				    </Col>
  						<Col xl="9">
								<br/><h2>Da der Weppes nach englischem Vorbild gemacht wird, heißt das für dich: <br/>
								Viel Alkohol. Mehr als üblich! Bis zu 15%. <br/>
								Und dabei behält er seinen frischen und typisch sauren Geschmack im Nachgang!
								<br/> </h2>
    					</Col>
    				</Row>
          </Fade>
          {/* ROW: User */}
          <Fade left delay={200}>
    				<Row className="Philosophie">
    					<Col xl="3">
    						<i className="fas fa-user fa-5x"></i> <br/><h2>Wie du es willst! <br/> </h2>
    					</Col>
    					<Col xl="9">
    						<br/><h2>Ist dir der Weppes zu sauer? Oder doch etwas zu viel Kohlensäure im Cider? <br/>
    						Sag mir bescheid, dein nächster wird genauso, wie du es willst! <br/>
    						Ein Vorteil davon, dass alles per Hand gemacht wird: <br/>
    						Jeder Weppes kann genau nach deinen Wünschen gemacht werden!
    						<br/></h2>
    					</Col>
    				</Row>
          </Fade>

          {/* ROW: Herz */}
          <Fade left delay={250}>
    				<Row className="Philosophie">
    					<Col xl="3">
    						<i className="fas fa-hand-holding-heart fa-5x"></i><br/><br/><h2>Gutes Gewissen!<br/> </h2>
    					</Col>
    					<Col xl="9">
    						<br/><h2>Die Weppes werden lokal produziert. <br/>
    						Die Äpfel stammen aus der Rhein-Main Region und werden sessional gepflückt, um auch unnötige Importe aus dem Ausland zu verhindern.<br/>
    						Dies hilft, die Umweltbelastung so niedrig wie möglich zu halten.
    						<br/></h2>
    					</Col>
    				</Row>
          </Fade>

          {/* ROW: Prozente */}
          <Fade left delay={300}>
    				<Row className="Philosophie">
    					<Col xl="3">
    						<i className="fas fa-percent fa-5x"></i><br/><br/><h2>100% investiert!<br/> </h2>
    					</Col>
    					<Col xl="9">
    						<br/><h2>Jeder Cent an Spende geht nicht in meine Tasche, sondern wird in den Weppes investiert.</h2>
    					</Col>
    				</Row>
          </Fade>
          </Jumbotron>
				</Container>
			</div>

		);
	}
}
