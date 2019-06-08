import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  i = 0
  buttonName = 'My button'
  spinnerMode = "determinate"
  btnEnable = true
  value = 70
  selectDisabled = false
  selectdOption = 1;
  
  inputName = "john"

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.i = 0
    this.buttonName = "My button"
  }

  inc(){
    this.i++
    this.buttonName = "it was clicked " + this.i + " times "    
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate"
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate"
    }, 3000);
  }

  cbChange(event){
    this.selectDisabled = event.checked
  }
  
  selectionChange(event){
    console.log(event);
    this.selectdOption = event.value
  }

  // inputEvent(event){
  //   console.log(event.target.value)
  //   console.log(this.inputName)
  // }

}
