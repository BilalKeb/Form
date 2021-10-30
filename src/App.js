import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
	constructor() {
		super()
		
		this.state = {
      LastName:"", 
      firstName:"",
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
    
     this.handleEmailChange = this.handleEmailChange.bind(this)
     this.handelPasswordChange = this.handelPasswordChange.bind(this)	
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
     this.handleLastNameChange = this.handleFirstNameChange.bind(this)
  }
    // gérer chaque changement(ajout ou retrait d'une lettre ) de l'input email
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
      e.preventDefault();
                              //  teste 2 conditions le ==
      if(this.state.emailIsValid == true && this.state.passwordIsValid==true){
        this.setState({isSubmitted:true}) 
      }
      if(this.state.isSubmitted == true){
        alert("Bravo,vous etes connecter")
      }
    // est-ce que le formulaire a été soumis 
    }
    handleFirstNameChange(e){
      this.setState({firstName:e.target.value})
    }
       handelLastName(e) {
         this.setState({lastName:e.target.value})
       }

    render() {
      return (
               
       <div>  
              {/* la condition a evaluer         - si vrais on excute ce qui est dans les premieres parenthes. : SI NON on excute ce qui dans Les SECONDE PARENTHES   */}
            {this.state.isSubmitted == true ? (<p>Bravo {this.state.email} Connection reussie</p>) : (
            <form>
              <div class="mb-3">
               <label for="exampleInputFirstName" class="form-label">Last Name</label>
               <input type="LastName" class="form-control" id="exampleInputEmail1" onChange ={this.handleLastNameChange}/>
               
             </div>
              <div class="mb-3">
               <label for="exampleInputFirstName" class="form-label">First Name</label>
               <input type="FirstName" class="form-control" id="exampleInputEmail1" onChange ={this.handleFirstNameChange}/>
               
             </div>
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
             <button type="submit"  onClick={this.handleSubmit} class="btn btn-primary">Submit</button>
            
           </form>) }
            
         </div>

        
      )
    }
}


export default App;


