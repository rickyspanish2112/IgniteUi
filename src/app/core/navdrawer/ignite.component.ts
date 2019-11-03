import { Component, OnInit, ViewEncapsulation, ViewChild, HostBinding, EventEmitter } from '@angular/core';
import { IgxNavigationDrawerComponent, IChangeSwitchEventArgs } from 'igniteui-angular';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

import { routes } from '../../app-routing.module';

export enum THEME {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
  BLACK = 'black-theme'
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-ignite',
  templateUrl: './ignite.component.html',
  styleUrls: ['./ignite.component.scss']
})
export class IgniteComponent implements OnInit {
  public selected = 'Home';

  public THEME: typeof THEME = THEME;
  public themes = [THEME.LIGHT, THEME.DARK];
  public modeStatus: string;

  public settings = [
    { name: 'Dark Mode', state: false },
  ];

  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public drawer: IgxNavigationDrawerComponent;

  @HostBinding('class')
  public themesClass: THEME = THEME.LIGHT;

  public topNavLinks: Array<{
    path: string,
    name: string
  }> = [];


  constructor(private router: Router) {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.topNavLinks.push({
          name: route.data.text,
          path: '/' + route.path
        });
      }
    }
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter((x) => x instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      if (event.url !== '/' && !this.drawer.pin) {
        // Close drawer when selecting a view on mobile (unpinned)
        this.drawer.close();
      }
    });

    this.modeStatus = 'Off';

  }

  onChange(value: IChangeSwitchEventArgs) {
    const { checked } = value;

    if (!checked) {
      this.themesClass = THEME.LIGHT;
      this.modeStatus = 'Off';
    } else {
      this.themesClass = THEME.DARK;
      this.modeStatus = 'On';
    }

  }
}

