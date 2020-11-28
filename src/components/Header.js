import React from 'react';

class Header extends React.Component {
	render(){
		return(
			<div className='header'>
				<nav id='header-nav'>
					<ul id='top-level-list'> 
						<li><a href='https://google.com'> Home </a></li>
						<li className='drop'>
							<a>Level 1 - text</a>
							<ul >
								<li>Level 2 - 1</li>
								<li>Level 2 - 2</li>
								<li>Level 2 - 3</li>
								<li>Level 2 - 4</li>
							</ul>
						</li>
						<li className='drop'>
							<a>Other text</a>
							<ul>
								<li>Level 2 - 11</li>
								<li>Level 2 - 21</li>
								<li>Level 2 - 31</li>
								<li>Level 2 - 41</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Header;