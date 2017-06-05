import React from 'react';
import ReactDOM from 'react-dom';
import Profile from "./Profile/Profile"
import testProfile from './ProfileImages/testProfile.jpg'

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
						<td><Profile image={testProfile} desc="Banan1"/></td>
						<td><Profile image={testProfile} desc="Banan2"/></td> 
						<td><Profile image={testProfile} desc="Banan3"/></td> 
						<td><Profile image={testProfile} desc="Banan4"/></td> 
						<td><Profile image={testProfile} desc="Banan5"/></td> 
					</tr>
				</table>
			</div>
		</div>
	);
  }
}