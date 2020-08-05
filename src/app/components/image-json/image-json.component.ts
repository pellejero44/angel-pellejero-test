import { Component, OnInit } from '@angular/core';
import { ImageJSON } from 'src/app/models/imageJsSON-model';

@Component({
  selector: 'app-image-json',
  templateUrl: './image-json.component.html',
  styleUrls: ['./image-json.component.css']
})
export class ImageJSONComponent implements OnInit {
  imageJSON_List: ImageJSON[];
  searchedKeyword: string;
  constructor() { }
  
  ngOnInit(): void {
    this.imageJSON_List= [];
    this.createJSON();
  }

  public getRandomText(): string {
    let text =["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     "Vivamus iaculis condimentum turpis eu molestie. Sed sed lectus sit amet nulla ornare eleifend.",
     "Nullam pretium suscipit magna, lacinia elementum lacus ultrices eu. Quisque mollis viverra semper.",
     "Cras quis tincidunt mi.",
     "Phasellus quis lorem et nisl fermentum varius eget sit amet arcu.",
     "Donec malesuada, libero sed condimentum fermentum, ex urna blandit mi, sed auctor libero elit sed augue.",
     "Mauris quis vulputate ligula. Curabitur est lacus, iaculis at imperdiet vel, egestas sed justo.",
     "Duis feugiat enim vel augue varius consectetur." ,
     "Donec porta, ipsum ut lacinia scelerisque, sem turpis venenatis tortor, ac molestie lectus massa eleifend tellus.",
     "Sed feugiat eleifend massa, ut volutpat ante ullamcorper quis. In dictum elementum turpis."];

     return text[Math.floor(Math.random() * text.length)];
  }

  public createJSON():void{
    for(let i =0; i< 4000; i++){
      this.imageJSON_List.push(new ImageJSON(i+"","https://picsum.photos/id/"+i+"/500/500", this.getRandomText()));
    }
  }

}
