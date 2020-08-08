import { Component, OnInit } from '@angular/core';
import { ImageJSON } from 'src/app/models/imageJsSON-model';
import { ImageJsonService } from 'src/app/services/image-json.service';

@Component({
  selector: 'app-image-json',
  templateUrl: './image-json.component.html',
  styleUrls: ['./image-json.component.scss']
})
export class ImageJSONComponent implements OnInit {
  public imageJSONList: ImageJSON[];
  public searchedKeyword: string;
  
  constructor(private imageJsonService: ImageJsonService) { }
  
  ngOnInit(): void {
    this.createJSON();
  }

  public createJSON():void{
    this.imageJSONList = this.imageJsonService.getJSON();
  }

}
 