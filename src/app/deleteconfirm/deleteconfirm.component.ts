import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {
  @Input()item:string | undefined
  @Input()serverMsg:string | undefined
  //oncancel is an user defined event
  @Output() onCancel = new EventEmitter()
  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    //occure onCancel event here using emit()
    this.onCancel.emit()
  }

  deletechild(){
    let deleteconfirm =true
this.onDelete.emit([this.item,deleteconfirm])
this.item=""
  }

}
