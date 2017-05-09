import { Component, Input, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, OnInit, OnDestroy} from '@angular/core'
import { AppService } from './application-dynamic-ui.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { AppService } from './app.service'

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


@Component({
  selector: 'dynamic-content',
  template: '<div><div #container></div></div><button type="button" name="Submit" (click)="apply()">Submit</button><br><br><div  *ngFor= "let key of keys" ><label for="{{key}}" [class.dynamic]="true">{{key}}:</label><input type="text" name="{{key}}" value="" [class.texbox]="true"><br><br></div>',
  providers:[AppService],
  styleUrls: ['./application-dynamic-ui.component.css']
})

export class DynamicContentComponent implements OnInit, OnDestroy {
  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  @Input() type: string;
  @Input() context: any;
  // @Input() context: any;

  private componentRef: ComponentRef<{}>;
  //private grants = document.getElementById("grants")
  //private grantsType = this.grants.options[this.grants.selectedIndex].value
  private _getApplicationsUI = 'http://dynamic-ui-dev.apps.gmm.bahincubator.com:80/newApplicationForm?grantType=';

  //private grants: AppService
  private grantsTypes
  public keys : String[]


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private grantsService : AppService) {
    }

    apply(){
      this.grantsTypes = this.grantsService.get(this.context)
      this.keys = Object.keys(this.grantsTypes)
      console.log(this.context)
      console.log(this.grantsTypes)
      console.log(this.keys)
    }


    ngOnInit(){
      if (this.type) {
        let componentType = this.getComponentType(this.type);
        let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.componentRef = this.container.createComponent(factory);

        let instance = <DynamicComponent> this.componentRef.instance;
        instance.context = this.context;
      }
    }

    ngOnDestroy(){
      if(this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
      }
    }

    private mappings = {
      'sample1': DynamicSample1Component,
      'sample2': DynamicSample2Component
    };

    getComponentType(typeName: string){
      let type = this.mappings[typeName];
      return type || UnknownDynamicComponent;
    }

}

export abstract class DynamicComponent{
  context: any;
}

@Component({
  selector: 'dynamic-sample-1',
  template: '<div>Dynamic sample 1 ({{context?.text}})</div>'
})

export class DynamicSample1Component extends DynamicComponent {}

@Component({
  selector: 'dynamic-sample-2',
  template: '<div>Dynamic sample 2 ({{context?.text}})</div>'
})

export class DynamicSample2Component extends DynamicComponent {}

@Component({
  selector: 'unknown-component',
  template: '<div>Unknown component</div>'
})

export class UnknownDynamicComponent extends DynamicComponent {}

// @Component({
//     selector: 'dynamic-component-demo',
//     template: '<div><h2>Dynamic content</h2><h3>Context: <input type="text" [(ngModel)]="context.text"></h3><dynamic-content type="sample1" [context]="context"></dynamic-content><dynamic-content type="sample2" [context]="context"></dynamic-content><dynamic-content type="some-other-type" [context]="context"></dynamic-content></div>'
//
// })
// export class DynamicContentComponentDemo {
//     context: any = {
//         text: 'test'
//     }
//     // './application-dynamic-ui.component.html'
//     // console.log("Test dynamic");
//     // private route: ActivatedRoute
//     // private router: Router
//     //
//     // onDynamicApplicationUI(){
//     //   this.router.navigate(['/Application/applicationDynamicUI']);
//     // }
// }
@Component({
  selector:"minimal-app",
  // Bind the "mySchema" member to the schema input of the Form component.
  template: '<sf-form [schema]="mySchema"></sf-form>'
})

export class DynamicFormComponent {
  // The schema that will be used to generate a form
  mySchema = {
    "properties": {
      "organizationName": {
        "type": "string",
        "description": "Organization Name"
      },
      "address": {
        "type": "string",
        "description": "Address 1"
      },
      "state": {
        "type": "string",
        "description": "State"
      },
      "typeApp": {
        "type": "string",
        "description": "Type of Application"
      },
      "congressionalDistrict": {
        "type": "string",
        "description": "Congressional District"
      },
      "projectTitle": {
        "type": "string",
        "description": "Project Title"
      },
      "projectNumber": {
        "type": "string",
        "description": "Project Number"
      },
      "projectYear": {
        "type": "number",
        "description": "Project Year"
      },
      "grantType": {
        "type": "string",
        "description": "Grant Type"
      },
      "grantValue": {
        "type": "number",
        "description": "Grant Value"
      }
    },
    "required": ["organizationName","state","projectTitle", "projectNumber", "projectYear"],
    "fieldsets": [{
      "title": "General Information",
      "fields": ["organizationName","address","state","typeApp","congressionalDistrict","projectTitle", "projectNumber", "projectYear"]
    }, {
      "title": "Grant Information",
      "fields": ["grantType","grantValue"]
    }]
  }
}
