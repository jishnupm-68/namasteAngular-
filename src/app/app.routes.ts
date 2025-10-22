import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { App } from './app';

import { Templates } from './components/templates/templates';
import { Input } from './components/input/input';
import { Child1 } from './components/child1/child1';
import { Child2 } from './components/child2/child2';
import { Child3 } from './components/child3/child3';
import { ParentRoutee } from './components/parent-routee/parent-routee';
import { NgModule } from '@angular/core';


export class AppRoutingModule {}

export const routes: Routes = [
    {
    path: "",
    component : App
},
{path: "counter",
component : Counter},
{
    path:"template",
    component: Templates
},
{
    path:'input',
    component: Input
},
{
    path:"parentRoute",
    component: ParentRoutee,
    children:[
        {path:"child1",component: Child1},
        {path:"child2",component: Child2},
        {path:"child3",component: Child3}
    ]
    
}
];
