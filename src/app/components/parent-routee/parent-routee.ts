import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-parent-routee',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './parent-routee.html',
  styleUrl: './parent-routee.scss'
})
export class ParentRoutee {

}
