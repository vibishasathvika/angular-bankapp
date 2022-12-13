import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  emsg=""
  
  withdrawform = this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]] ,
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] ,


   })
  msg: any;

  constructor(private fb:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
  }

  withdraw(){
    if (this.withdrawform.valid){
      let acno = this.withdrawform.value.acno
      let pswd =this.withdrawform.value.pswd
      let amount =this.withdrawform.value.amount
      this.api.withdraw(acno,pswd,amount)
       .subscribe(
      //   //response 200
        (result:any)=>{
        console.log(result);
        this.msg = result.message
        setTimeout(()=>{
          this.msg = ""
          alert(result.message)
          this.withdrawform.reset()

        },1000)
      //  
        
        },
      //response 4xx
      (result:any)=>{
         this.emsg =result.error.message
         setTimeout(()=>{
          this.emsg=""
         },2000)
      }
       )
      
      }
      else{
        alert('invalid form')
      }
      
   }
  

}
