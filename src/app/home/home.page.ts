import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private puerto: string = "";
  private IP_1: string = "";
  private IP_2: string = "";
  private IP_3: string = "";
  private IP_4: string = "";

  constructor(private router: Router, private dataService: DataService) { }
  
  
  public conectar(): void {

    this.dataService.setData("http://" + this.IP_1 + "." + this.IP_2 + "." + this.IP_3 + "." + this.IP_4 +":" + this.puerto);
    
    this.router.navigateByUrl('/video');
    //alert(this.dataService.getData());
  }

}
