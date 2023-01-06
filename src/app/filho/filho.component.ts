import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  template:  `<input 
                  type= "text"
                  (keyup) = "entrada(input.value)"
                  #input
              >`
              ,
  
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit{
  @Output() inputEvent = new EventEmitter<string>();
  
  entrada(value:string){
    this.inputEvent.emit(value)
  }
  ngOnInit(): void{}


}
