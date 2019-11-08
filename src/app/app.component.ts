import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { EmployeeModel } from './shared/models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleApp';

  constructor(private dataService: DataService) {
    this.dataService.getEmployee()
      .subscribe((data: EmployeeModel) => {
        console.log(data);
      });
  }
}
