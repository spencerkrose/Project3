import React from "react";
import Footer from "../components/Footer"

function Splash() {
    return (
        <div>
            <img className="center-align responsive-img" src="https://i.imgur.com/c84jD8h.jpg" alt="Aaron, Betty, and Michael will uncover the truth!"></img>
            <div className="container">
                <h1 className="newspaper center-align padding: 10px"> <i>Murder at Dibblets College Prep!</i></h1>
                <h4 className="newspaper center-align ">Bake sale called off after a student dies due to tainted treat.</h4>
                <div>
                    <h5 className="newspaperBody left-align line-height=2px">DIBBLETS - Town gossips and PTA regulars Betty Cooker and Aaron Fields have been accused of murder after a student died at the annual Dibblets College Prep Bake Sale. A poisoned treat at the festivities claimed the life of 18-year-old Jenny Erickson.
                    <br></br>
                        <br></br> Cooker and Fields have started a podcast with Fields' son Michael in an attempt to interview all other tables at the bake sale, find the real culprit, and prove their innocence.
                    <br></br>
                        <br></br>
                        Police have not formally charged the pair, but we all know that they will because who else could have done it? Are they being framed? Will they find the real killer? Do either of them know what a podcast even is?
                </h5>
                </div>
            </div>
            <br></br>
            <div className="center-align z-depth-4">
           <a href="https://deathatabakesale.podbean.com/" target="_blank" id="subBtn">Listen Now</a>
           </div>
           <Footer/>
        </div>
    );
}

export default Splash;