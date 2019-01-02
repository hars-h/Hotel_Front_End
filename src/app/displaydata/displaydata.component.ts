// Request JSON data using HttpClient
import {Component, OnInit} from '@angular/core';
import {PicserviceService} from '../picservice.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  items=[];

  constructor(public PicService:PicserviceService) {
    this.PicService.getPosts().subscribe(data => {
        this.items = data;
        console.log(this.items);
    });
  
  }

  ngOnInit(){
   }

  


   }
  


