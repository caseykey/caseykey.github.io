import React, {useState} from 'react'
import { Heading } from './style.js' // Global styled-components
import { Container, Row, Col } from 'reactstrap'
import { ProjectSection } from './Projects/style.js'
import Project from './Projects/Project'

import PortfolioPic from '../images/portfolio/spa-portfolio.png'
import Hat from '../images/hat/hat.png'
import TripCo from '../images/tripco/demo.png'
import Oracle from '../images/oracle/slide_11.png'
import PythonBlog from '../images/whatspython/homepage.png'
import Billboard from '../images/billboard/app-home.png'

import { FaReact, FaNpm, FaGit, FaSass,FaGithub, FaRaspberryPi, FaPython, 
				 FaMicrochip, FaSlack, FaJava, FaDatabase, FaServer, FaTwitter, 
				 FaNewspaper, FaApple, FaBootstrap, FaEthereum, FaWordpress, FaPhp, FaGamepad } from 'react-icons/fa'
import { DiFirebase, DiHeroku } from 'react-icons/di'
import { IoMdAnalytics } from 'react-icons/io'

export const Projects = (props) => {

	return (
		<ProjectSection name="Projects">
			<Container fluid={true} className="">
				<Row noGutters className="justify-content-center pb-5">
					<Col md={12} className="heading-section text-center ">
						<Heading className="mb-4">My Projects</Heading>
						<p>I find the best way to learn is by practice. Here is the result of my work.</p>
					</Col>
				</Row>
				<Row>
					<Col md={4} className="pb-4">
						<Project image={PortfolioPic} 
										 title={"Portfolio Website"}
										 subtitle={"Web Development"}
										 icons={[FaReact, FaNpm, FaGit, FaGithub, FaSass]}
										 date="January 2020 - Present"
						>
							For this year's portfolio, I focused on creating a website for acquiring freelance work and project exposure.
							Compared to previous portfolios, this application is a single page with a focus on easily updating and adding content.
							<br /><br />
							To accomplish this task, I converted a static page into a React project.
							The most difficult parts of this project were styling and evaluating my skills numerically.
							<br /><br />
							To make this website easier to update, I decided to use Gatsby to allow content creation via a dashboard.
							Finally, I am most proud of the administrator dashboard where I can modify the look and content without diving into code. 
						</Project>
					</Col>
					<Col md={4} className="pb-4">
						<Project image={Hat}
										 title={"Programming Hat"}
										 subtitle={"IoT Development"}
										 icons={[FaRaspberryPi, FaGit, FaGithub, FaPython, FaMicrochip]}
										 date={"August 2019 - December 2019"}
						>
							The programming hat is a motorized propeller hat triggered by Github contributions. 
							As a team of three students, we built the hat to study the effect of positive reinforcement on Github contributions.
							<br /><br />
							The hat's propeller was powered by a small DC motor. This motor was controlled by a
							LT239D integrated circuit which received signals from a Raspberry PI Zero W. The entire unit was powered
							by a 20700 li-ion battery and managed by a boost converter and charging module. The Raspberry Pi issued
							signals according to a Python script. The script created a web server
							for listening to post requests sent after a Git commit or push.
							<br /><br />
							From our experiments, we found that commits increased by 500% while wearing the programming hat.
							We conclude the fun effect of the hat incentivizes users to make more Github contributions. 
							This project was voted best project by our classmates.   
						</Project>
					</Col>
					<Col md={4} className="pb-4">
						<Project image={TripCo} 
										 title={"Trip Planner"}
										 subtitle={"Software Engineering"}
										 icons={[FaReact, FaNpm, FaGit, FaGithub, FaJava, FaSlack]}
										 date={"August 2019 - December 2019"}
						>
							As a team of four students, we developed of a full-stack web application like Google Maps using agile development practices.
							<br /><br />
							Starting from just a map and non-functional components, we implemented features for creating a full-fledged trip planner.
							Our trip planner is used for planning plane trips, so routes are calculated "as-the-crow-flys". Important features
							are trip optimization using variations of 2-opt to remove loops in the trip route. Calculations are done server-side, and
							can be done automatically for the user based on how long the optimization will take. Additionally, the server is used to
							query a database which contains locations.
							<br />
							The trip display can be customized by changing route markers size, color, and icon. The itinerary allows items to be added
							manually, by search, and by file upload. File formats were standardized to allow interoperability between other trip planners.
							In regards to interoperability, our server and client where independent of one another. Throughout the semester, we tested
							our client and server using our classmates'. 
							<br /><br />
							By the end of the semester, I learned how to lead a scrum sprint, and how to prevent and resolve conflicts in regards to 
							the software development process. By the end, my team knocked it out of the park and received our highest score for the final demo.
						</Project>
					</Col>
					<Col md={4} className="pb-4">
						<Project image={Oracle} 
										 title={"Live Sentiment Analysis"}
										 subtitle={"Oracle Cloud Internship"}
										 icons={[FaPython, FaDatabase, FaServer, IoMdAnalytics, FaTwitter, FaNewspaper, FaApple]}
										 date={"June 2019 - August 2019"}
						>
							My team developed real-time business inteligence dashboards during our summer 2019 internship at Oracle in Reston, VA.
							<br /><br />
							Our goal for this project was to create a proof-of-concept of Oracle Cloud's services for a bank.
							This lead to an executive view of actionable insights for increasing revenue by cross-selling bank services.
							We created dashboards, generated insight reports, and made a targeted recommendation. 
							<br />
							Our product demonstrated the capabilities of Oracle Autonomous Database by consolidating data across many systems.
							With this data, we used tools such as Oracle Analytics Cloud for intuitive data visualiztions.
							Overall, we created four dashboards analyzing revenue sourcers, the customer, and profitability.
							<br /><br />
							At the end of the internship, we presented our work to the office, including our manager and mentor.
							My favorite memory from this internship was a tubing trip down the Potomac river.
							I am thankful for the opportunity to work at a top software company where I met many talented people.
						</Project>
					</Col>	
					<Col md={4} className="pb-4">
						<Project image={PythonBlog}
										 link={''}
										 icons={[FaWordpress, FaPhp, FaPython, FaGamepad]}
										 title={"Python Curriculum & Blog"}
										 subtitle={"Curriculum Development"}
										 date={"May 2018 - July 2018"}
						>
							In May of 2017 I was hired to be a student instructor for the Northrop Grumman STEM Camp.
							To teach high school students with no programming experience, I developed a curriculum and hosted it as a blog.<br /><br />
							The blog was hosted on Namecheap with a custom domain. Content was created and managed using Wordpress. 
							Features were extended using PHP and plugins to provide social functions such as profiles and commenting. <br /><br />
							On this blog, I posted lessons as blog posts including videos for:
							<ul>
								<li>setting up the environment</li>
								<li>using variables</li>
								<li>control flow</li>
								<li>methods</li>
								<li>classes and using objects</li>
								<li>creating games using modules</li>
							</ul>
							<br />
							I discovered an unexpected love for teaching when I received my award.
							When I went up to the stage for recognition as an instructor, my students all cheered for me. 
							This success has motivated me to keep curriculum development on my mind ever since. 
						</Project>
					</Col>
					<Col md={4} className="pb-4">
						<Project image={Billboard}
										 link={"https://etherradio.herokuapp.com/#!/landing"}
										 icons={[FaReact, FaEthereum, DiFirebase, DiHeroku, FaBootstrap, FaGithub]}
										 title={"Blockchain & Music Billboard"}
										 subtitle={"WyoHackathon 2018"}
										 date={"September 2018"}
						>
								For the 2018 WyoHackathon, I wanted to extend EtherRadio.
								Motivated to recognize musicians for their work and spearhead SingularDTV's (now Breaker) challenge,
								I won myself and a friend on the idea of developing a top musician billboard powered by blockchain.
								<br /><br />
								This music billboard is a curated list of high-quality musicians.
								It works like a game where token holders control which musicians are listed.
								Applying to be on the top musician list requires a deposit to prevent trolls and spam submissions.
								The token holders are incentivized to maintain the quality of the list by challenging applications.
								If a challenge is successful, the voters are rewarded with the applicant's deposit.
								<br /><br />
								The result of over 40 hours of hacking, my team created a billboard which impressed SingularDTV's team.
								We won an all expense paid trip to San Francisco, CA, to attend Our Music Festival.
								Our Music Festival was inspirational to attend as it was the world's first blockchain music festival. 
						</Project>
					</Col>
				</Row>
			</Container>
		</ProjectSection>
	);
}