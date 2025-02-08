export interface Approver {
  setNext(approver: Approver): Approver;
  approveRequest(amount: number): void;
}
