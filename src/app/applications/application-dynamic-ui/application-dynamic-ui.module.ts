import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DynamicSample1Component, DynamicSample2Component, UnknownDynamicComponent, DynamicContentComponent, DynamicContentComponentDemo, DynamicFormComponent } from './application-dynamic-ui.component'
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "angular2-schema-form";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SchemaFormModule
  ],
  exports: [
    DynamicContentComponent,
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent,
    DynamicContentComponentDemo,
    DynamicFormComponent
  ],
  declarations: [DynamicContentComponent,
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent,
    DynamicContentComponentDemo,
    DynamicFormComponent
  ],
  entryComponents: [
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent
  ],
  providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
  bootstrap: [ DynamicContentComponentDemo ]
})
export class DynamicContentModule { }
