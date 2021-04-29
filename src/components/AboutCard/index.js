import React from 'react';
import img from './Judy.jpg';

function AboutCard() {
    return(
        <div className="container padding">
        
            <div className="row">
                <div className="col-sm-3">
                    <img src={img} alt="Judy the Riveter" width="100%" />
                </div>
                <div className="col-sm-9">
                    <h2>About Me</h2>
                    <hr />
                    <p>I began a career in non-profit communications in 2007 producing a newsletter for a small local non-profit. From there, I developed skills in email marketing, website maintenance, graphic design, strategic communication, social media, and basic HTML and CSS. It became clear to me that there was a whole big world behind the websites I was working on, and I wanted to learn how it worked. I enrolled in the UW Coding Bootcamp for full-stack development with the intent to shift into that career.</p>
                    <p>While it is very difficult to balance a bootcamp program and a full-time job, I have been able to maintain straight As in almost every subject: HTML, CSS &amp; Bootstrap, Javascript, jQuery, third-party APIs, Node JS, Express, object-oriented programming, MYSQL, MondoDB, and React. Because of my communications background, I am most interested in front-end development, which appeals to my sense of branding, story, and target audiences, but this program has taught me the value of the interaction between the front end and the back end. I would be thrilled to work with a full stack of technologies, and I believe I could be the most valuable software developer on any team.</p>
                    <p><a href="https://github.com/jnaegeli12" rel="noreferrer" target="_blank">Github Profile</a></p>
                </div>
            </div>

        </div>
    )
}

export default AboutCard;