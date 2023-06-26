import { Component, AfterViewInit, OnInit } from '@angular/core';
import { INavData } from '../../models/menu.model';
import { navItems } from '../_nav';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  navItems: INavData[] = navItems;

  ngOnInit(): void {
    console.log(this.navItems);
    }



}