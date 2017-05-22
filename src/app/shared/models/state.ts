import { IState } from './istate';
export class State implements IState {
  constructor(public id: string, public name: string, public abbreviation: string) { }
}
