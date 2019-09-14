import React from 'react';
import logo from './logo.svg';
import './App.css';
import cloud from './images/cloud.PNG';
import server from './images/server.PNG';
import talkToUs from './images/talk-to-us.PNG';
import organizations from './images/organizations.PNG';
import robot from './images/robot.PNG';
import hero from './images/hero.jpg';
import nationwide from './images/nationwide.jpg';
import sap from './images/sap.jpg';
import spotify from './images/spotify.jpg';

function App() {
	return (
		<div className="container">
			<header>
				<nav>
					<ul>
						<li>
							<a href="#">Why GitHub?</a>
						</li>
						<li>
							<a href="#">Enterprise</a>
						</li>
						<li>
							<a href="#">Explore</a>
						</li>
						<li>
							<a href="#">Marketplace</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
					</ul>
				</nav>
				<div className="sign-up-header">
					<input type="text" placeholder="Search Github" className="search" />
					<button className="sign-in"> Sign in</button>
					<button className="sign-up">Sign up</button>
				</div>
			</header>
			<div className="main-section" />
			<div className="overlay">
				<div className="intro">
					<h1 className="intro-h1">Built for developers</h1>
					<p>
						GitHub is a development platform inspired by the way you work. From open source to business, you
						can host and review code, manage projects, and build software alongside 40 million developers.
					</p>
				</div>
				<div className="sign-up-form">
					<form>
						<label for="username">Username</label>
						<input type="text" id="username" />
						<label for="email-input">Email</label>
						<input type="email" id="email-input" />
						<label for="password-input">Password</label>
						<input type="password" id="password-input" />
						<p>
							Make sure it's at least 15 characters OR at least 8 characters including a number and a
							lowercase letter. Learn more
						</p>
						<button className="Sign-up-for-github"> Sign Up for Github</button>
						<p>
							By clicking “Sign up for GitHub”, you agree to our Terms of Service and Privacy Statement.
							We’ll occasionally send you account related emails.
						</p>
					</form>
				</div>
			</div>
			<section className="details">
				<div className="get-started">
					<div className="get-started-para">
						<h1 className="h1">Get Started With GitHub Enterprise</h1>
						<p>
							Take collaboration to the next level with security and administrative features built for
							teams.
						</p>
					</div>
					<div className="details-list">
						<div className="list-item">
							<img src={cloud} />
							<h4>Enterprise Cloud</h4>
							<p>Leave the hosting to us.</p>
							<button className="try-cloud">Try Cloud for free</button>
						</div>
						<div className="list-item">
							<img src={server} />
							<h4>Enterprise Server</h4>
							<p>Deploy to your environment.</p>
							<button className="try-server">Try Server for free</button>
						</div>
						<div className="list-item">
							<img src={talkToUs} />
							<h4>Talk to us</h4>
							<p>Want to use both?</p>
							<button className="contact">Contact Us </button>
						</div>
					</div>
				</div>
				<div className="intro-github">
					<h1 className="intro-github-h1">Introducing GitHub Actions with CI/CD</h1>
					<p>
						Automate any workflow with GitHub Actions.<br />
						See the latest updates announced at our HQ reveal.
					</p>
					<button className="check-it-out">Check it out</button>
				</div>
				<div className="organizations">
					<p>More than 2.1 million businesses and organizations use GitHub</p>
					<img src={organizations} />
				</div>
				<div className="github-for-teams">
					<p className="github-teams">Github for teams</p>
					<h1 className="github-teams-h1">A better way to work together</h1>
					<p className="github-teams-para">
						GitHub brings teams together to work through problems,<br /> move ideas forward, and learn from
						each other along the way.
					</p>
					<button className="github-teams-button">Sign up your team</button>
				</div>
				<div className="team-work-features">
					<figure>
						<img src={robot} />
					</figure>
					<div className="features">
						<div className="feature-list-item">
							<h2>Write Better Code</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="feature-list-item">
							<h2>Manage your chaos</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="feature-list-item">
							<h2>Find the right tools</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</div>
        <div className="companies-using-github">
          <p>See how the world's leading companies use GitHub Enterprise.</p>
          <div className="companies">
            <div className="company">
              <img src={hero}></img>
              <h4>MGM Resorts International</h4>
              <p></p>
              <hr></hr>
              <p className="read-more"></p>
            </div>
            <div className="company">
            <img src={nationwide}></img>
              <h4>Nationwide</h4>
              <p></p>
              <hr></hr>
              <p className="read-more"></p>
            </div>
            <div className="company">
            <img src={sap}></img>
              <h4>SAP</h4>
              <p></p>
              <hr></hr>
              <p className="read-more"></p>
            </div>
            <div className="company">
            <img src={spotify}></img>
              <h4>Spotify</h4>
              <p></p>
              <hr></hr>
              <p className="read-more"></p>
            </div>
          </div>
        </div>
			</section>
		</div>
	);
}

export default App;
