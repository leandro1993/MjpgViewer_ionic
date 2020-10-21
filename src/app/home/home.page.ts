import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private puerto: string = "8080";
  private IP_1: string = "192";
  private IP_2: string = "168";
  private IP_3: string = "1";
  private IP_4: string = "6";



  constructor(private router: Router, private dataService: DataService) { }
  
  
  public conectar(): void {

    this.dataService.setData("http://" + this.IP_1 + "." + this.IP_2 + "." + this.IP_3 + "." + this.IP_4 +":" + this.puerto);
    
    this.router.navigateByUrl('/video');
    //alert(this.dataService.getData());
  }

}