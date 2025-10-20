import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  count = model<number>(0);
  data = model<string>("")
  updateCounter(num:number){
    if(num==1) this.count.update(v=>v+1)
    else if(num==-1) this.count.update(v=>v-1)
    else this.count.set(0)
  }
}
