import React from 'react';
import ReactDOM from 'react-dom';
import Profile from "./Profile/Profile"
import testProfile from './ProfileImages/oscar.jpg'

export default class MainBody extends React.Component {
	constructor(props){
		super(props)
	}
  render() {
	 
	var backgroundStyle = {
		backgroundColor: 'black',
	}
	
	var profileHolderStyle = {
		textAlign:'center',
		width: '50%',
		margin: 'auto',
		paddingTop:'20px',
	}

    return(
		<div style={backgroundStyle}>
			<div style={profileHolderStyle}>
				<table>
					<tr>
						<td><Profile image={testProfile} desc="Oscar Andell"/></td>
					</tr>
				</table>
			</div>
		</div>
	);
  }
}