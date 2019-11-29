import { Component, OnInit } from '@angular/core';
import { Funnel } from '../../../auth/interfaces/funnel.model';
import { DataService } from '../../../auth/services/data.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


}
