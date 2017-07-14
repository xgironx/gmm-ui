
import { Component, Input, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, OnInit, AfterViewInit, OnDestroy, Injectable, OnChanges, DoCheck, KeyValueDiffers, ChangeDetectorRef } from '@angular/core'
import { AppService } from './application-dynamic-ui.service'
import { ApplicationService } from '../application.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'dynamic-component-demo',
  templateUrl: './application-dynamic-ui.component.html',
  styleUrls: ['./application-dynamic-ui.component.css']
})
export class DynamicContentComponentDemo {
  context: any = {
    text: 'test'
  }
}

console.log('ABOUT TO ENTER TEMPLATE')
@Component({
  selector: 'dynamic-content',
  // template: '<div><div #container></div></div><br><button (click)="click()">Get Applications</button><br><div  *ngFor= "let key of keys" ><label for="{{key}}" [class.dynamic]="true">{{key}}:</label><input type="text" name="{{key}}" value="" [class.texbox]="true"><br><br></div>',
  template: '<div><div #container></div></div><br><button (click)="click()">SAVE DRAFT SHINY NEW BUTTON FROM GIRO</button><br><div  *ngFor= "let key of keys" ><label for="{{key}}" [class.dynamic]="true">{{key}}:</label><input type="text" name="{{key}}" value="" [class.texbox]="true"><br><br></div>, <div><div #container></div></div><br><button (click)="click()">CANCEL SHINIER NEW BUTTON COURTESY OF GIRO</button><br><div  *ngFor= "let key of keys" ><label for="{{key}}" [class.dynamic]="true">{{key}}:</label><input type="text" name="{{key}}" value="" [class.texbox]="true"><br><br></div>',
  providers: [
    AppService,
    DynamicFormComponent],
  styleUrls: ['./application-dynamic-ui.component.css']
})

export class DynamicContentComponent implements OnInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input() type: string;
  @Input() context: any;

  private componentRef: ComponentRef<{}>;
  private _getApplicationsUI = 'http://dynamic-ui-dev.apps.gmm.bahincubator.com:80/newApplicationForm?grantType=';

  // private _getGrantTypes: AppService
  private grantsTypes
  private grants
  public keys: String[]
  public applications;


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: AppService,
    private applicationService: ApplicationService,
    private grantsService: DynamicFormComponent,
    private dynamicForm: DynamicFormComponent
  ) {
  }
  click() {
    this.service.getApplications()
      .subscribe((applications) => {
        console.log(applications);
        this.applications = applications;
      })
  }

  ngOnInit() {
    if (this.type) {
      let componentType = this.getComponentType(this.type);
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      let instance = <DynamicComponent>this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private mappings = {
    'sample1': DynamicSample1Component,
    'sample2': DynamicSample2Component,
    'sample3': DynamicFormComponent
  };

  getComponentType(typeName: string) {
    let type = this.mappings[typeName];
    return type || UnknownDynamicComponent;
  }

}

export abstract class DynamicComponent {
  context: any;
}

@Component({
  selector: 'dynamic-sample-1',
  template: '<div>Dynamic sample 1 ({{context?.text}})</div>'
})

export class DynamicSample1Component extends DynamicComponent { }

@Component({
  selector: 'dynamic-sample-2',
  template: '<div>Dynamic sample 2 ({{context?.text}})</div>'
})

export class DynamicSample2Component extends DynamicComponent { }

@Component({
  selector: 'unknown-component',
  template: '<div>Unknown component</div>'
})

export class UnknownDynamicComponent extends DynamicComponent { }

@Component({
  selector: "minimal-app",
  template: '<sf-form [schema]="schema"  [actions]="saveForm" (onChange)="value=$event.value"></sf-form>'
})


export class DynamicFormComponent {

  public schema = {
    'properties': {},
    'buttons': [
      {
        type: 'button',
        id: 'submit',
        label: 'Submit'
      }
    ]
  };

  // public schema = {
  //   'properties': {},
  //   'buttons': [
  //     {
  //       type: 'button',
  //       id: 'cancel',
  //       label: 'cancel'
  //     }
  //   ]
  // };


  public value;

  constructor(
    private dataService: AppService
  ) { }

  saveForm = {
    "submit": (property) => {
      console.log('submit');
      this.dataService.submitApplication(property.value).subscribe(value => {
        console.log('value from return ' + value);
      })
    }
  }

  ngOnInit(grant: string) {
    this.dataService.getData()
      .subscribe(data => {
        this.schema = data;
      }
      )
  }

  ngAfterViewInit(){
    document.getElementsByTagName("button")[0].classList.add("btn")
    document.getElementsByTagName("button")[0].classList.add("btn-primary")
  }
}
