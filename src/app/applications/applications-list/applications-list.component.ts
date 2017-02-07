import { Component, OnInit } from '@angular/core';
import { IApplication } from '../iapplication';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html'
})
export class ApplicationsListComponent implements OnInit {
  applications: ApplicationTableData[] = [];
  appData: IApplication[] = null;
  errorMessage: string;

  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'Application Id', name: 'applicationId', sort: 'asc', filtering: { filterString: '', placeholder: '' } },
    { title: 'Grant Type', name: 'grantType', sort: '', filtering: { filterString: '', placeholder: '' } },
    { title: 'POC', name: 'poc', sort: '', filtering: { filterString: '', placeholder: '' } },
    { title: 'Sub Grantee', name: 'subGrantee', sort: '', filtering: { filterString: '', placeholder: '' } },
    { title: 'Status', name: 'status', sort: '', filtering: { filterString: '', placeholder: '' } }
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 2;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered', 'table-condensed']
  };

  constructor(private _applicationService: ApplicationService) {}

  ngOnInit() {
    this._applicationService.getApplications()
      .subscribe(
      (applications) => {
        this.appData = applications;
        for (let a of this.appData) {
          this.applications.push(new ApplicationTableData(a.applicationId.toString(), a.grantType, a.poc, a.subGrantee, a.status));
        }
        console.log(applications);
        this.length = this.applications.length;
        this.onChangeTable(this.config);
      },
      error => this.errorMessage = <any>error
      );
  }

  public changePage(page: any, data: Array<any> = this.applications): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      (<any>Object)(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      (<any>Object).assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.applications, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}

class ApplicationTableData {

    constructor(
        public applicationId: string = "",
        public grantType: string = "",
        public poc: string = "",
        public subGrantee: string = "",
        public status: string = "")
     {}
}
