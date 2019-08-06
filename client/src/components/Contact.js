import React from "react";
import "../style.css"
import Footer from "./Footer"

function Contact() {
    return (
        <div>
            <div class="container contactForm">
                <div class="row">
                    <div class="col m10 offset-m1 s12">
                        <h2 class="center-align newspaperFont">Send Us Your Clues!</h2>
                        <p class="newspaperFont center-align">If you are the murderer, you can also confess here.</p>
                        <div class="row">
                            <form class="col m8 offset-m2 s12">
                                <div class="row">
                                    <div class="newspaperFont input-field col s12">
                                        <input id="name" type="text" />
                                        <label for="name">Name</label>
                                    </div>
                                    <div class="newspaperFont input-field col s12">
                                        <input id="email" type="email" class="form-input" />
                                        <label for="email">Email</label>
                                    </div>
                                    <div class="newspaperFont input-field col s12">
                                        <textarea id="message" class="materialize-textarea"></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col m12">
                                        <p class="right-align"><button class="subBtn2 btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Contact;