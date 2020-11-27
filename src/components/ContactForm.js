import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const { name, email, message } = this.state;

        let templateParams = {
            from_name: name + ' (' + email + ')',
            to_name: 'Judy',
            message_html: message,
        }
        
        emailjs.send(
            'service_ax1ilco',
            'template_pt8ml9h',
            templateParams,
            'user_4yxdRT7iHQYc3thuNdTpY'
        )

        this.resetForm();
    }

    resetForm = () => { 
        this.setState({
          name: '',
          email: '',
          message: ''
        })
    }
    
    render() {
        return (
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Name</label>
                <input 
                    type="text" 
                    name="name"
                    defaultValue={this.state.name}
                    className="form-control" 
                    onChange={this.handleChange.bind(this)}
                    placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Email</label>
                <input 
                    type="email" 
                    name="email"
                    defaultValue={this.state.email}
                    className="form-control" 
                    placeholder="Email"
                    onChange={this.handleChange.bind(this)}>
                </input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea 
                    type="text"
                    name="message"
                    defaultValue={this.state.message}
                    className="form-control"
                    rows="3"
                    onChange={this.handleChange.bind(this)}>
                </textarea>
              </div>
              <button type="submit" value="submit" className="btn btnclass">Submit</button>
            </form>
        )
    }
}

export default ContactForm;