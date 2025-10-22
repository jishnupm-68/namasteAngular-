import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Input } from "./components/input/input";
import { Directives } from "./components/directives/directives";

@Component({
  selector: 'app-root',
  imports: [Input, Directives, RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('learnAngular');


}
