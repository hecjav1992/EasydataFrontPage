import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  items: any[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
    $("#btnaudifono").click(() => {
      $('.cargadores, .audifono, .powerBank, .adaptadores').hide();
      setTimeout(function () {
        $('.audifono').toggle({ effect: "scale" });
      }, 400);
    });

    $("#btnPowerBank").click(() => {
      $('.cargadores, .audifono, .powerBank, .adaptadores').hide();
      setTimeout(function () {
        $('.powerBank').toggle({ effect: "scale" });
      }, 400);
    });

    $("#btncargadores").click(() => {
      $('.cargadores, .audifono, .powerBank, .adaptadores').hide();
      $(".cardHeaderaudifono").css('display:none');
      setTimeout(function () {
        $('.cargadores').toggle({ effect: "scale" });
      }, 400);
    });

    $("#btnAdaptador").click(() => {
      $('.cargadores, .audifono, .powerBank, .adaptadores').hide();
      setTimeout(function () {
        $('.adaptadores').toggle({ effect: "scale" });
      }, 400);
    });

  }


}
function action(arg0: string) {
  throw new Error('Function not implemented.');
}

