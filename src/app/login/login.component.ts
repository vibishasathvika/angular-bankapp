import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 emsg = ""
 msg = ""
  //login form
  loginform = this.fb.group({
   acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] 
  })

  constructor(private fb:FormBuilder,private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
     if (this.loginform.valid){
    let acno = this.loginform.value.acno
    let pswd =this.loginform.value.pswd
    this.api.login(acno,pswd)
    .subscribe(
      //response 200
      (result:any)=>{
      console.log(result);
      localStorage.setItem("username",result.username)
      localStorage.setItem("token",result.token)
      localStorage.setItem("currentAcno",result.currentAcno)

     // alert(result.message)
     this.msg=result.message
       setTimeout(()=>{
        this.router.navigateByUrl('dashboard')

       },2000)

      
    },
    //response 4xx
    (result:any)=>{
      this.emsg =result.error.message
     // alert(result.error.message)
    }
    )
    
    }
    else{
      alert('invalid form')
    }
    
    
    
  }

}



