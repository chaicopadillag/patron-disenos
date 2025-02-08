import { COLORS } from '../../../../libs/colors.ts';
import { BaseApprover } from './base-approver.ts';

export class Manager extends BaseApprover {
  override approveRequest(amount: number): void {
    if (amount <= 5000) {
      console.log('%cSolicitud aprobada por el gerente', COLORS.blue);
    } else {
      super.next(amount);
    }
  }
}
