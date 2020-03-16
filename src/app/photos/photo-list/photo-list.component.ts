import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute
    ) { }
  
  // inicialização
  ngOnInit(): void { //ocorre apos a instanciação
    this.photos = this.activatedRoute.snapshot.data['photos'];


    
    
  }

}
