import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user=""
  balance=""
  islogout:boolean=false;
  acno=""
  deleteMsg=""
  eMsg=""
  confirmMsg=false


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("username")){
      this.user = localStorage.getItem("username") || ''
    }
   // priventing going to dashboard after login
    if(!localStorage.getItem("token")){
      alert('please log In')
      this.router.navigateByUrl('')
    }
  }

  getBalance(){

    if(localStorage.getItem("currentAcno")){
      let acno = localStorage.getItem("currentAcno")
      this.api.balance(acno)
      .subscribe(
        (result:any)=>{
          console.log(result);
          
          this.balance = result.message
        },
        (result:any)=>{
          this.balance = result.error.message
        }
      )

    }
  }


  //logout function

  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("currentAcno")
    this.islogout=true
    setTimeout(()=>{
      this.router.navigateByUrl('')

    },2000);
  }

  //deleteAcno
 deleteAcno(){
  if(localStorage.getItem('currentAcno')){
    this.acno = localStorage.getItem('currentAcno') || ''

  }
 }

//cancel
 cancel(){
  this.acno=""

 }

 //deleteparant($event)
 deleteparant(event:any){
  this.confirmMsg = event[1]
//console.log(event);
  this.api.deleteAccount(event[0])
  .subscribe(

    //response 200
    (result:any)=>{
      
      this.acno=""
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      localStorage.removeItem("currentAcno")
      this.deleteMsg = result.message
      setTimeout(()=>{
        this.router.navigateByUrl('')

      },2000)
  
      },
      
    

    //response 404
    (result:any)=>{
      this.eMsg = result.error.message
       
    }

  )
 }

}
