import { Approver } from '../interfaces/approver.interface.ts';

export abstract class BaseApprover implements Approver {
  private nextApprover?: Approver;

  setNext(approver: Approver): Approver {
    this.nextApprover = approver;
    return approver;
  }

  abstract approveRequest(amount: number): void;

  protected next(amount: number): void {
    if (this.nextApprover) {
      this.nextApprover.approveRequest(amount);
      return;
    }

    console.log('Solicitud no pudo ser aprobada.');
  }
}
