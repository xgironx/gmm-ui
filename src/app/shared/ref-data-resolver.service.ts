import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { RefDataService } from './ref-data.service'

@Injectable()
export class StateResolver implements Resolve<any> {
  constructor(private refDataService:RefDataService) {}
  resolve() {
    return this.refDataService.getStates();
  }
}

@Injectable()
export class ApplicantTypeResolver implements Resolve<any> {
  constructor(private refDataService:RefDataService) {}
  resolve() {
    return this.refDataService.getApplicantTypes();
  }
}

@Injectable()
export class GrantTypeResolver implements Resolve<any> {
  constructor(private refDataService:RefDataService) {}
  resolve() {
    return this.refDataService.getGrantTypes();
  }
}