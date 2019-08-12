import React, {Component} from "react";
import "../style.css"
import Footer from "./Footer"
import axios from "axios"
import {Button, Form, FormGroup, Label, Input} from "reactstrap"



class Contact extends Component {
   constructor(){
       super()

       this.state= {
           name: '',
           email: '',
           message: ''
       }
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
   }

  async handleSubmit(e){
       e.preventDefault()
       this.props.history.push('/Submitted')

       const {name, email, message} = this.state

       const form = await axios.post('/send', {
           name,
           email,
           message
       })
   }
  
    render(){
    return (
    <div className="container">
    <div className="contactForm">
    <h1 className="center-align newspaperFont">Send Us Your Clues!</h1>
        <p className="center-align newspaperFont">Or if you're the murderer, please confess here.</p>
       <Form id="myForm" onSubmit={this.handleSubmit} className="container">
           <FormGroup>
               <Label for="name">Name:</Label>
               <Input
               type="text"
               name="name"
               onChange={this.handleChange}/>
           </FormGroup>

           <FormGroup>
               <Label for="email">Email:</Label>
               <Input
               type="email"
               name="email"
               onChange={this.handleChange}/>
           </FormGroup>

           <FormGroup>
               <Label for="message">Message:</Label>
               <Input
               type="textarea"
               name="message"
               onChange={this.handleChange}/>
           </FormGroup>
           <div className="center-align">
               <br></br>
           <Button className="subBtn2">Submit</Button>
           </div>
       </Form>
       </div>
       <Footer/>
       </div>
    );
}
}

export default Contact;