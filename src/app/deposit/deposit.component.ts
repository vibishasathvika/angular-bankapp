import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  emsg=""
  user=""
  
  depositform = this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]] ,
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] ,


   })

  constructor(private fb:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {

    if(localStorage.getItem("username")){
      this.user = localStorage.getItem("username") || ''
    }
  }
 deposit(){
  if (this.depositform.valid){
    let acno = this.depositform.value.acno
    let pswd =this.depositform.value.pswd
    let amount =this.depositform.value.amount
    this.api.deposit(acno,pswd,amount)
    .subscribe(
      //response 200
      (result:any)=>{
      console.log(result);
      alert(result.message)
      this.depositform.reset()
      
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
