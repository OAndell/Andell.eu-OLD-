import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import Drawer from '../../Components/Drawer/Drawer';
import BackgroundImage from '../../Resources/Backgrounds/background.png';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'
import {getImages} from "../networking/networking"

/* Layout for the image gallery page*/

export default class ImagePage extends React.Component {
	render() {
		var imageList = getImages();
		var layoutStyle = {
			backgroundImage: `url(${BackgroundImage})`,
			backgroundRepeat: 'repeat',
			positon: "absolute",
			paddingBottom:"500px"

		};
		//<ImageCarousel images={imageList}/>
		return (
			<div id ="outer-container">
				<Drawer/>
				<main id ="page-wrap">
					<div style={layoutStyle}>
						<Header largeText = "Bildgalleri" smallText = ""/>
						<div  className="bodyBackground">
						</div>
					</div>
				</main>
			</div>
		);
	}
}
