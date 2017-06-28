import { Component, Input, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, OnInit, OnDestroy, Injectable, OnChanges, DoCheck, KeyValueDiffers, ChangeDetectorRef} from '@angular/core'
import { AppService } from './application-dynamic-ui.service'
import { Router, ActivatedRoute, Params } from '@angular/router';


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
  providers:[
    AppService,
    DynamicFormComponent],
  styleUrls: ['./application-dynamic-ui.component.css']
})

export class DynamicContentComponent implements OnInit, OnDestroy {
  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  @Input() type: string;
  @Input() context: any;

  private componentRef: ComponentRef<{}>;
  private _getApplicationsUI = 'http://dynamic-ui-dev.apps.gmm.bahincubator.com:80/newApplicationForm?grantType=';

  // private _getGrantTypes: AppService
  private grantsTypes
  private grants
  public keys : String[]


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private grantsTypesService : AppService,
    private grantsService : DynamicFormComponent
  ) {
    }

    apply(){
      this.grantsTypes = this.grantsTypesService.getGrants()
       .subscribe(data => {
         this.context = data
         console.log('Grants: ', this.grantsTypes)
       }
       )  //this.context)
      // this.keys = Object.keys(this.grantsTypes)
      // console.log(this.context)

      // console.log(this.keys)
      this.grants = this.grantsService.setMySchema(this.context)
      // this.grantsTypes = this.grantsService.setMyModel(this.context)
      // console.log(this.grantsTypes)
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
      'sample2': DynamicSample2Component,
      'sample3' : DynamicFormComponent
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
  // Bind the "mySchema" member to the schema input of the Form component.[validators]="myValidators" (onChange)="value=$event.value" {{value | json}}
  template: '<sf-form [schema]="schema" (onChange)="value=$event.value"></sf-form> {{value | json}}'
})


export class DynamicFormComponent {
// implements OnChanges{
  // The schema that will be used to generate a form
  // @Input()
  public schema: any = {
    "properties": {}
  }

  public value: JSON
  // public myChange: boolean
  // private objDiffer

  // differ: any
  // public refreshWidget: WidgetChooserComponent
  constructor(
    private dataService : AppService
  ){
    // private differs: KeyValueDiffers


  }
  // mySchema = {}

  private mySchema1 = {
    "properties": {
      "grantType": {
        "type": "string",
        "description": "Grant Type"
      },
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
        "description": "State",
        "widget": "select",
        "oneOf": [{
          "description": "Alabama", "enum": ["alabama"]
        }, {
          "description": "Alaska", "enum": ["alaska"]
        }, {
          "description": "California", "enum": ["california"]
        }],
        "default": "alabama"
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
      "projectDate": {
        "type": "string",
        "description": "Submission Date",
        "widget": "date"
      },
      "grantValue": {
        "type": "number",
        "description": "Grant Value"
      },
      "notificationsFrequency": {
        "type":"string",
        "description": "Dispersement Schedule",
        "widget": "select",
        "oneOf": [{
          "description": "Monthly", "enum": ["monthly"]
        }, {
          "description": "Quarterly", "enum": ["quarterly"]
        }, {
          "description": "Semi Annually", "enum": ["semiAnnually"]
        },{
          "description": "Annually", "enum": ["annually"]
        }],
        "default": "annually"
      }
    },
    "required": ["organizationName","state","projectTitle", "projectNumber", "projectYear"],
    "fieldsets": [{
      "title": "General Information",
      "fields": ["organizationName","address","state","typeApp","congressionalDistrict","projectTitle", "projectNumber", "projectYear", "projectDate"
    ]
    }, {
      "title": "Grant Information",
      "fields": ["grantType","grantValue"
      ,"notificationsFrequency"
    ]
    }]
  }

  // "projCheck": {
  //   "type": "string",
  //   "description": "Project (verification)"
  // },
      // , "projCheck"
    // ,"amount","newGrant","password"

  // ,
  // "amount": {
  //   "type": "string",
  //   "description": "Is grant amount greater than $1 million?",
  //   "widget":"radio",
  //   "oneOf": [{
  //     "description": "Yes", "enum": ["yes"]
  //   }, {
  //     "description": "No", "enum": ["no"]
  //   }],
  //   "default": "no"
  // }
  // ,
  // "newGrant": {
  //   "type": "boolean",
  //   "default": false,
  //   "description": "Is this a new or existing grant?"
  // }
  // ,
  // "password": {
  //   "type": "string",
  //   "description": "Password",
  //   "widget":"password"
  // }

  // myValidators = {
  //   "/projCheck": (value, property, form) => {
  //     if (this.schema.property['projectTitle'] < 5 && value
  //        ) {
  //          console.log('Validator:', this.schema.property['projectTitle'], value)
  //       return {"projCheck":{"expectedValue":"Name should be less than 5 characters"}}
  //     }
  //     return null;
  //   }
  // }


  myModel = {}

  setMyModel(grant: string){
    this.myModel = {grantType: grant}
    return this.myModel
  }

  setMySchema(grant: string){
    // this.schema = this.mySchema1
    // console.log(this.schema)
    // this.ngOnChanges(grant)
    // this.myChange = false

    if(grant){
      this.schema = this.mySchema1
      // this.myChange = true
      // ChangeDetectorRef.detectChanges()
      // this.schema.properties.description.widget = 'string'
      // this.schema.required = ['password']
      // this.schema.onChange()
      // console.log(this.myChange)
      console.log(this.schema)
      console.log(this.schema.properties)
    }
  }

  ngOnChanges(changes: any){
    console.log('change triggered')
    console.log(changes.prop)
    console.log(changes[this.schema].currentValue)

  }

  // ngDoCheck(){
    // var changes = this.differ.diff(this.schema.properties)
    //
    // if(changes){
    //   console.log('***changes detected***')
    //   changes.forEachChangedItem(r => console.log('changed: ', r.currentValue))
    //   changes.forEachAddedItem(r => console.log('added: ', r.currentValue))
    //   changes.forEachRemovedItem(r => console.log('removed: ', r.currentValue))
    // }else {
    //   console.log('nothing changed')
    // }
    // Object.keys(this.schema).map(elt => {
    //   var objDiffer = this.objDiffer[elt]
    //   var objChanges = objDiffer.diff(elt)
    //   if(objChanges){
    //     objChanges.forEachChangedItem((elt) => {
    //       if(elt.key === 'properties'){
    //         console.log("Properties changed")
    //       }
    //     })
    //   }
    // })
  // }

  ngOnInit(grant: string){
    // console.log(grant)
    // if(grant){
      //this.schema =

      this.dataService.getData()
       .subscribe(data => {
         this.schema = data
         console.log('Grants: ', this.schema)
       }
       )
      // console.log(this.schema)
    // }
  //   this.objDiffer = {}
  //   Object.keys(this.schema).map((elt) => {
  //     this.objDiffer[elt] = this.differs.find(elt).create(null)
  //   })
  }
}
