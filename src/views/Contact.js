import React, { Component } from 'react';
import Footer from './footer';
import './style.css';

// contact
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            pekerjaan:'',
            email:'',
            pesan:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name] : value})
    }
    onSubmit =  (event) => {
        alert(`nama adalah ${this.state.name}, pekerjaan saya adalah ${this.state.pekerjaan}, Email saya adalah ${this.state.email}, Pesan ${this.state.pesan}` );
        event.preventDefault();
    }
    // controled component
    render() {
        const { name, pekerjaan, email, pesan } = this.state;
        return(
            <>
            <div className="form-contact">
                <h2> Send Your Message </h2> 
                <hr />
                <div className= "form">
                    
                <form onSubmit={this.onSubmit}>
                    <label>Name : </label>
                    <input type="text" name ="name" className="input" value ={name} onChange={this.onChange} required/>
                    <label>Pekerjaan : </label>
                    <input type="text" name="pekerjaan" className="input" value={pekerjaan} onChange={this.onChange} required/> 
                    <label>Email : </label>
                    <input type="email" name="email" className="input" value={email} onChange={this.onChange} required/> 
                    <label>Pesan</label>
                    <textarea name="pesan" className="input-text" value={pesan} onChange={this.onChange} required />
                    <button className="button" type="submit" >Send Your Message</button>
                </form>
                </div>
               
            </div>
            <Footer />
            </>
        )
    }
}