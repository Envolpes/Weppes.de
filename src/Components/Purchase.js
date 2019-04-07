import React from 'react';
import LazyHero from 'react-lazy-hero';
import {Jumbotron} from 'reactstrap';
import './Home.css';
import Picture from'./Pics/FanPic.jpg';

export default class Purchase extends React.Component {

	componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
  		<div style={{background:"#212121", color:"white"}}>
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}>
					<div className= "HeroText"></div>
				</LazyHero>
				<Jumbotron className="Platzhalter"/>
				<div className="KontaktText">
					<h2>Wie bekomme ich einen Weppes?</h2>
					<p>Du willst einen Weppes haben und fragst dich, wie du ihn bekommst?</p>
					<p>Sprich mich einfach persönlich an oder schreibe mir eine Mail an <a href="mailto:marcelwepper@gmail.com"> marcelwepper@gmail.com</a>.<br/></p>
					<h2>Deine Weppes - Founder Box kannst du zusammenstellen, wie DU es willst.</h2>
					<p>Es sind aber natürlich auch einzelne Weppes möglich.</p>
					<b>Disclaimer: Es ist ein Hobby und es werden keine Weppes endgeltlich verkauft. Bei Interesse bekommst du einen Weppes.</b><br/> <br/>
					<h2>Spenden</h2>
					Für Spenden bin ich offen. Dabei geht jeder Cent für die weitere Entwicklung des Weppes.
					Falls du etwas spenden willst, kann dies gerne mit PayPal durchgeführt werden:
					<i class="fab fa-paypal"><a href="https://www.paypal.me/weppeswein"> PayPal.</a></i>
					<Jumbotron className="Platzhalter"/>
				</div>
			</div>

		);
	}
}
