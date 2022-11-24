import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login form
  loginform = this.fb.group({
   acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] 
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  login(){
     

    if (this.loginform.valid){
      let acno = this.loginform.value.acno
    let pswd =this.loginform.value.pswd
    console.log(acno);
    console.log(pswd);
    alert('login click')


    }
    else{
      alert('invalid form')
    }
    
    
    
  }

}



