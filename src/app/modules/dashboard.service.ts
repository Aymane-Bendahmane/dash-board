import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Hecarim',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Khazix',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Kayn',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Gragas',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Jarvan IV',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Hecarim',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Khazix',
      y: 11.84
    }, {
      name: 'Ekko',
      y: 10.85
    }, {
      name: 'Jarvan',
      y: 4.67
    }, {
      name: 'Gragas',
      y: 4.18
    }, {
      name: 'Kayn',
      y: 1.64
    }, {
      name: 'Talon',
      y: 1.6
    }, {
      name: 'Sion',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}
