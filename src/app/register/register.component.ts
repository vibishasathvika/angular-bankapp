import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emsg=""

  Registerform = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] ,
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] ,


   })


  constructor(private fb:FormBuilder, private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    if (this.Registerform.valid){
      let acno = this.Registerform.value.acno
      let pswd =this.Registerform.value.pswd
      let uname =this.Registerform.value.username
      this.api.register(acno,pswd,uname)
      .subscribe(
        //response 200
        (result:any)=>{
        console.log(result);
        alert(result.message)
        this.router.navigateByUrl('')
        
        },
      //response 4xx
      (result:any)=>{
         this.emsg =result.error.message
      }
      )
      
      }
      else{
        alert('invalid form')
      }
      

  }

}
