import { IGrantType } from './igrant-type';
export class GrantType implements IGrantType {
  constructor(public grantTypeId: string, public grantTypeName: string) { }
}