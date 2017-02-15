import { IState } from './istate';
export class State implements IState {
  constructor(public stateId: string, public stateName: string, public stateAbbreviation: string, public urbanArea: string) { }
}