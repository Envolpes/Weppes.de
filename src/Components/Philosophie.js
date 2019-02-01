import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import Fade from 'react-reveal/Fade';

import './Home.css';
import Picture from'./Pics/Apfelwagen.jpg';

export default class Philo extends React.Component {
	render(){
		return(
  		<div className="Jumbotron ">
				{/* Hero Image*/}
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}>
				</LazyHero>



				<Container fluid>
					<Row className="Philosophie">
						<Col sm="12" md={{ size: 9, offset: 3 }}>
							<h1> Warum Weppes: </h1>
						</Col>
					</Row>

					<Row className="Philosophie">

						<Col xl="3">
							<Fade left delay={150}>
								<i className="fas fa-dumbbell fa-5x"></i> <br/><h2>Nichts für Schwache!<br/> </h2>
							</Fade>
						</Col>
						<Col xl="9">
							<Fade left delay={150}>
								<br/><h2>Da der Weppes nach englischem Vorbild gemacht wird, heißt das für dich: <br/>
								Viel Alkohol. Mehr als üblich! Bis zu 15%. <br/>
								Und dabei behält er seinen frischen und typisch sauren Geschmack im Nachgang!
								<br/> </h2>
							</Fade>
						</Col>
					</Row>
					<Row className="Philosophie">
						<Col xl="3">
							<Fade left delay={200}>
								<i className="fas fa-user fa-5x"></i> <br/><h2>Wie du es willst! <br/> </h2>
							</Fade>
						</Col>
						<Col xl="9">
							<Fade left delay={200}>
							<br/><h2>Ist dir der Weppes zu sauer? Oder doch etwas zu viel Kohlensäure im Cider? <br/>
							Sag mir bescheid, dein nächster wird genauso, wie du es willst! <br/>
							Ein Vorteil davon, dass alles per Hand gemacht wird: <br/>
							Jeder Weppes kann genau nach deinen Wünschen gemacht werden!
							<br/></h2>
							</Fade>
						</Col>
					</Row>
					<Row className="Philosophie">
						<Col xl="3">
							<Fade left delay={250}>
								<i className="fas fa-hand-holding-heart fa-5x"></i><br/><br/><h2>Gutes Gewissen!<br/> </h2>
							</Fade>
						</Col>
						<Col xl="9">
							<Fade left delay={200}>
							<br/><h2>Die Weppes werden lokal produziert. <br/>
							Die Äpfel stammen aus der Rhein-Main Region und werden sessional gepflückt, um auch unnötige Importe aus dem Ausland zu verhindern.<br/>
							Dies hilft, die Umweltbelastung so niedrig wie möglich zu halten.
							<br/></h2>
							</Fade>
						</Col>
					</Row>
					<Row className="Philosophie">
						<Col xl="3">
							<Fade left delay={300}>
								<i className="fas fa-percent fa-5x"></i><br/><br/><h2>100% investiert!<br/> </h2>
							</Fade>
						</Col>
						<Col xl="9">
							<Fade left delay={200}>
							<br/><h2>Jeder Cent an Spende geht nicht in meine Tasche, sondern wird in den Weppes investiert.</h2>
							</Fade>
						</Col>
					</Row>
				</Container>
			</div>

		);
	}
}
