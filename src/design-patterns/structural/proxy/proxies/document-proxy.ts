import { COLORS } from '../../../../libs/colors.ts';
import { DocumentI, RoleType } from '../interfaces/document.interface.ts';
import { User } from '../models/user.model.ts';
import { ConfidentialDocument } from '../real/confidential-document.ts';

export class DocumentProxy implements DocumentI {
  constructor(private confidentialDocument: ConfidentialDocument, private mustHaverRoles: RoleType[]) {}

  displayContent(user: User): void {
    if (this.mustHaverRoles.includes(user.getRole())) {
      this.confidentialDocument.displayContent();
    } else {
      console.log(`%cAcceso denegado. ${user.getName()}, no tienes permisos suficientes para ver este documento.`, COLORS.red);
    }
  }
}
