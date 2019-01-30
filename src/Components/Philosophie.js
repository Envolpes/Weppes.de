import React from 'react';
import LazyHero from 'react-lazy-hero';

import './Home.css';
import Picture from'./Pics/Apfelwagen.jpg';

export default class Philo extends React.Component {
	render(){
		return(
  		<div>
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}>
					<div className= "HeroText"><h1> Under construction...</h1> </div>
				</LazyHero>
  		</div>
		);
	}
}
