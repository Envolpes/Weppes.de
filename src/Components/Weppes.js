import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Jumbotron, Card, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';

import './Home.css';
import Picture from'./Pics/Weppes_Reihe.jpg';
import Founder from './Pics/Weppes_Weiß.jpg';
import Fass from './Pics/FlascheFass.jpg';
import Cider from './Pics/WeppesCider.jpg';
import Baum from'./Pics/Apfelbaum.jpg';
import Wagen from'./Pics/Wagen.jpg';

export default class Weppes extends React.Component {

	componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
  		<div className="CardsFull" style={{background:"#212121",color:"white"}}>

      {/* H1 Titeltextseite*/}
      {/* NoGutters bewirkt, dass kein Abstand zwischen den Feldern vorhanden ist, somit edge to edge*/}
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}/>

				<Row noGutters="true" className="Sup2">
					<Col lg={{ size:12, order: 1}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
						<div className="CardBlock">
						<h3> Founder Box</h3>
								Für alle, die das Projekt Weppes unterstützen wollen, gibt es die Möglichkeit, eine Weppes Founder Box zu erhalten!<br/>														Enthalten sind 6 Flaschen á 0.5L, kleine Goodies und das schöne Gefühl, etwas tolles von Anfang an zu unterstützen!<br/>Wenn du Interesse hast, schreibe mir eine Mail! <br/>Die Founder Box kann Individuell mit den unten stehenden Weppes zusammengestellt werden.
                (Keine Gläser enthalten.)
						</div>
					</Col>
					<Col lg={{ size:12, order: 2}} md={{size:12, order:2}} sm={{size:12, order:2}} xs={{size:12, order:2}} >
						<Card>
              <img src={Founder} className="img-fluid" alt="" style={{width:"100%"}}/>
						</Card>
					</Col>
				</Row>
        <Row noGutters="true" className="Sup1">
  				<Col lg={{ size:6, order: 1}} md={{size:12, order:2}} sm={{size:12, order:2}} xs={{size:12, order:2}}>
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
          <Row noGutters="true" className="Sup2">
  					<Col lg={{ size:6, order: 1}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
  						<div className="CardBlock">
  						<h3> Der Cider</h3>

              Der Weppes - Cider, nach englischem Vorbild, verbindet den Apfelwein mit einem frischen, spritzigen Geschmack.<br/>
              Der Cider wird aus dem Weppes - Apfelwein und einem Zusatz an Kohlensäure erzeugt.

  						</div>
  					</Col>
  					<Col lg={{ size:6, order: 2}} md={{size:12, order:2}} sm={{size:12, order:2}} xs={{size:12, order:2}}>
  						<Card >
                  <img src={Cider} className="img-fluid" dark alt="" />
  						</Card>
  					</Col>
  				</Row>

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
									<br/><h3 style={{fontSize:'1.5em'}}>Da der Weppes nach englischem Vorbild gemacht wird, heißt das für dich: <br/>
									Viel Alkohol. Mehr als üblich! Bis zu 15%. <br/>
									Und dabei behält er seinen frischen und typisch sauren Geschmack im Nachgang!
									<br/> </h3>
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
	    						<br/><h3 style={{fontSize:'1.5em'}}>Ist dir der Weppes zu sauer? Oder doch etwas zu viel Kohlensäure im Cider? <br/>
	    						Sag mir bescheid, dein nächster wird genauso, wie du es willst! <br/>
	    						Ein Vorteil davon, dass alles per Hand gemacht wird: <br/>
	    						Jeder Weppes kann genau nach deinen Wünschen gemacht werden!
	    						<br/></h3>
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
	    						<br/><h3 style={{fontSize:'1.5em'}}>Die Weppes werden lokal produziert. <br/>
	    						Die Äpfel stammen aus der Rhein-Main Region und werden sessional gepflückt, um auch unnötige Importe aus dem Ausland zu verhindern.<br/>
	    						Dies hilft, die Umweltbelastung so niedrig wie möglich zu halten.
	    						<br/></h3>
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
	    						<br/><h3 style={{fontSize:'1.5em'}}>Jeder Cent an Spende geht nicht in meine Tasche, sondern wird in den Weppes investiert.</h3>
	    					</Col>
	    				</Row>
	          </Fade>
	          </Jumbotron>
					</Container>

	        <Jumbotron className="Platzhalter"/>
	        <Container fluid>
	          <Row>
	            <Col xl="5">
	                <img src={Wagen} className="img-fluid Bild" alt="" />
	            </Col>
	            <Col xl="7">
	              <h1>Handerlesene Äpfel</h1> <br/>
	              <h3>Von der Ernte jedes einzelnen Apfel bis zum Abfüllen des Getränke alles in Handarbeit. </h3> <br/>
	              <h3>Dabei steht weder eine Massenproduktion im Vordergrund, noch ein schneller Profit. Entschleunigung ist das Ziel. Die Natur, wie es gewollt hätte. </h3> <br/>
	              <h3>Im Weppes wurde jeder Apfel einzeln von den Bäumen gepflückt, inspiziert und bewertet, ob dieser für den Apfelwein in Frage kommt. Nur die besten aller Äpfel schafften es in die Auswahl.</h3>
	            </Col>
	          </Row>

	          {/* PLATZHALTER */}
	          <Jumbotron className="Platzhalter"/>
	          <Row>

	            <Col xl="9" >
	              <div style={{textAlign:'right'}}>
	                <h1>Natürlicher Genuß</h1> <br/>
	                <h3>Frische, handerlesene Äpfel, ausreichend Zeit und Geduld, und ein Funken Neugier, <br/> sind die einzigen Bestandteile, die ein guter Apfelwein zu haben hat.</h3> <br/>
	                <h3>Ein Unterschied, den man scheckt!</h3> <br/>
	                <h3>Eine leichte Süße, gefolgt von einer natürlich sauren Note im Nachgang. <br/>Frischer Genuß, ohne Zusätze, ohne Mitwirken durch Fremdeinflüsse.</h3><br/>
	                <b>Keine künstlichen Aromastoffe, keine tierieschen Produkte jeglicher Art. Für vegane Ernährung geeignet.</b>
	              </div>
	            </Col>
	            <Col xl="3">
	              <img src={Baum} className="img-fluid Bild" alt="" />
	            </Col>
	          </Row>
	        </Container>

  		</div>
		);
	}
}
