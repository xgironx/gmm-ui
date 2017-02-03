import { IState } from './istate';
export class State implements IState {
  constructor(public abbreviation: string, public name: string) { }
}