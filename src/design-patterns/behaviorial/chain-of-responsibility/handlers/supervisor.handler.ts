import { COLORS } from '../../../../libs/colors.ts';
import { BaseApprover } from './base-approver.ts';

export class Supervisor extends BaseApprover {
  override approveRequest(amount: number): void {
    if (amount <= 1000) {
      console.log('%cSolicitud aprobada por el supervisor', COLORS.orange);
    } else {
      super.next(amount);
    }
  }
}
