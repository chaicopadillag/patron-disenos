import { COLORS } from '../../../../libs/colors.ts';
import { BaseApprover } from './base-approver.ts';

export class Director extends BaseApprover {
  approveRequest(amount: number): void {
    if (amount <= 10000) {
      console.log('%cSolicitud aprobada por el director', COLORS.green);
    } else {
      console.log('%cSolicitud no pudo ser aprobada.', COLORS.red);
    }
  }
}
