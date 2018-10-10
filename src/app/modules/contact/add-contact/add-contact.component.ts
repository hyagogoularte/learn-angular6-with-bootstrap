import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  model: any = {}

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

}
