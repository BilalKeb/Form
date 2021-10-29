import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
	constructor() {
		super()
		
		this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
     this.handleEmailChange = this.handleEmailChange.bind(this)
     this.handelPasswordChange = this.handelPasswordChange.bind (this)	

  }
    
    handleEmailChange(e) {
      this.setState({email:e.target.value})
      
      const regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)

      if(regex) { 
        this.setState({emailIsValid:true})
      }
      
    
    }
    handelPasswordChange(e) {
      this.setState({password:e.target.value})
      if (e.target.value.length>5) {
        this.setState({passwordIsValid:true})
      }
    }
    handleRememberMeChange(e) {
      this.setState({rememberMe: true})
      
    }
    handleSubmit(e) {
      e.preventDefault ()

      this.setState()


    }


    render() {
      return (
          <div>        
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange ={this.handleEmailChange}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" 
                      onChange ={this.handelPasswordChange}/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1" onChange={this.handleRememberMeChange}>Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        
          
        
         

        </div>

        
      )
    }
}


export default App;
