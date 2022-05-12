import React from 'react';
import Icon from './icons';

function Contact(props) {
    return(
        <main>
            <div className="contact">
                <h1>Contact</h1>
                <div id="contact-content">
                    <div id="contact-form-wrapper">
                        <form id="contact-form" action="mailto:andrewohepworth@gmail.com" method="get" encType="multipart/form-data" name="EmailForm">
                            <p>Send me a message:</p>
                            <input name="name" placeholder='Name'></input>
                            <input name="email" placeholder='Email'></input>
                            <textarea name="message" placeholder="Tell me what's on your mind"></textarea>
                            <input type="submit" value="Send your message!"></input>
                        </form>
                    </div>
                    <hr></hr>
                    <div id="email-text">
                        <p>If you think contact forms are outdated, email me directly: </p>
                        <p>andrewohepworth@gmail.com</p>
                    </div>
                    <hr></hr>
                    <div class="socials">
                        <p>Social Links:</p>
                        <a href="https://github.com/pseudotsuga-fir" rel="noreferrer" target="_blank"><Icon icon="github"/></a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;