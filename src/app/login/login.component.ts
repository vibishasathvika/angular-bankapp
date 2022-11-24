import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login form
  loginform = this.fb.group({
   acno:[''],
   pswd:[''] 
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  login(){
    let acno = this.loginform.value.acno
    let pswd =this.loginform.value.pswd
    console.log(acno);
    console.log(pswd);
    alert('login click')

    
    
  }

}



