import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-escolar',
  templateUrl: './escolar.component.html',
  styleUrls: ['./escolar.component.css']
})
export class EscolarComponent implements OnInit {
  items: any[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  };
}
