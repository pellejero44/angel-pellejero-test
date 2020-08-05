export class ImageJSON{
    id: string;
    photo: string;
    text: string;

    constructor(id:string, photo:string, text:string){
        this.id= id;
        this.photo= photo;
        this.text =text;
    }
}