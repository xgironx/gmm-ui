import { IGrantType } from './igrant-type';
export class GrantType implements IGrantType {
  constructor(public id: string, public name: string) { }
}