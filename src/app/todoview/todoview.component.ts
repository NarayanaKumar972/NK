import { Component, OnInit } from '@angular/core';

export interface Todo {
name: String,
isCompleted: Boolean
}

@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.css']
})
export class TodoviewComponent implements OnInit {
  item="";
  count = 0;

  items: Todo[] = []

  constructor() { }
  onDel(item: any) {
    this.count = 0;
    item.isCompleted = false;
    this.items.forEach( i => {
      if(i.isCompleted == false){
        this.count +=1;
      }
    })
  }
  onSave() {
    if(this.item != ""){
    this.count = 0;
    const name = this.item;
    const isCompleted = true;
    const newItem: Todo = {name: name, isCompleted: isCompleted};
    this.items.push(newItem);
    this.item = "";
    this.items.forEach( i => {
      if(i.isCompleted == false){
        this.count +=1;
      }
    })
  } else {
    alert("Task Name Cannot be Blank")
  }
  }

  ngOnInit(): void {
  }

}
