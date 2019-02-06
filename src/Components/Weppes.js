import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import Fade from 'react-reveal/Fade';

import './Home.css';
import Picture from'./Pics/Weppes_Reihe.jpg';
import Founder from './Pics/Weppes_Weiß.jpg';
import Fass from './Pics/FlascheFass.jpg';

export default class Weppes extends React.Component {

	componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
  		<div className="CardsFull noGutters">
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}/>

				<div class="row">
					<div class="col-md-6 col-xs-12 order-1 order-xs-2 no-gutters">
						<div className="CardBlock">
						<h3> Founder Box</h3>
								Für alle, die das Projekt Weppes unterstützen wollen, gibt es die Möglichkeit, eine Weppes Founder Box zu erhalten!<br/>														Enthalten sind 6 Flaschen á 0.5L, kleine Goodies und das schöne Gefühl, etwas tolles von Anfang an zu unterstützen!<br/>Wenn du Interesse hast, schreibe mir eine Mail! <br/>Die Founder Box kann Individuell mit den unten stehenden Weppes zusammengestellt werden.
						</div>
					</div>
					<div class="col-md-6 col-xs-12 order-2 order-xs-1 no-gutters">
						<Card >
              <CardImg src={Founder} alt="image" />
						</Card>
					</div>
				</div>
				<div class="row">
				<div class="col-md-6 col-xs-12 no-gutters">
					<Card >
						<CardImg src={Fass} alt="image" />
					</Card>
				</div>
					<div class="col-md-6 col-xs-12 no-gutters">
						<div className="CardBlock">
						<h3> Der Apfelwein / De Äppelwoi</h3>

Womit alles gestartet hat, der Apfelwein. Aus einem Experiment wurde der Weppes.
Naturtrüb, Handerlesen und regional Angebaut,
ist dieser so umweltschonend wie möglich hergestellt worden. Ohne künstlichen Zusätze, für veganen Verzehr geeignet, ist er mit großer Rücksicht für die Natur und Umwelt enstanden. Er ist die Grundlage für alle anderen, auf den Apfelwein basierenden Getränke, wie zum Beispiel: <br/>
•	Der Weppes Cider <br/>
•	Der Weppes Glühapfelwein mit Zimt & Zucker <br/>

						</div>
					</div>

				</div>


  		</div>
		);
	}
}
