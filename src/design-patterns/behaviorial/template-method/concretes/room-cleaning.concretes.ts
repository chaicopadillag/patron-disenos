import { RoomCleaning } from '../abstracts/room-cleaning.ts';

// Subclase - HotelRoomCleaning
export class HotelRoomCleaning extends RoomCleaning {
  protected specificCleaning(): void {
    console.log('Haciendo las camas y reponiendo artículos de baño.');
  }
}

// Subclase - ConferenceRoomCleaning
export class ConferenceRoomCleaning extends RoomCleaning {
  protected specificCleaning(): void {
    console.log('Limpiando mesas y organizando sillas.');
  }
}

// Subclase - OfficeCleaning
export class OfficeCleaning extends RoomCleaning {
  protected specificCleaning(): void {
    console.log('Limpiando escritorios y organizando documentos.');
  }
}
