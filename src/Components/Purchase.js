import React from 'react';
import LazyHero from 'react-lazy-hero';

import './Home.css';
import Picture from'./Pics/FanPic.jpg';

export default class Purchase extends React.Component {

	componentWillUnmount(){
    window.scrollTo(0, 0)
  }

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
