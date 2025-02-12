/**
 * !Objetivo: 
 * Implementar el patrón Template Method para simular un sistema de limpieza 
 * de diferentes tipos de habitaciones 
 * (por ejemplo, una habitación de hotel y una sala de conferencias). 
 * 
 * Debes diseñar una clase base que defina el flujo general de limpieza 
 * y subclases que implementen pasos específicos dependiendo del tipo 
 * de habitación.
 * 
 * 
 * 
 * ! Descripción del Ejercicio
  El proceso de limpieza general incluye los siguientes pasos:
    1.	Entrar a la habitación: Abrir la puerta y entrar.
    2.	Recoger basura: Eliminar la basura de los botes.
    3.	Limpieza específica: Depende del tipo de habitación:
    •	En una habitación de hotel, se hacen las camas.
    •	En una sala de conferencias, se limpian las mesas y se organizan las sillas.
    • En una oficina, se limpian los escritorios y se organizan los documentos.
    4.	Desinfectar superficies: Desinfectar las áreas principales.
    5.	Salir de la habitación: Cerrar la puerta y marcar como terminada
 */
export abstract class RoomCleaning {
  // Método plantilla: define el flujo general
  cleanRoom(): void {
    this.enterRoom();
    this.collectTrash();
    this.specificCleaning();
    this.disinfectSurfaces();
    this.exitRoom();

    console.log('Limpieza terminada.\n');
  }

  // Pasos comunes
  private enterRoom(): void {
    console.log('Entrando a la habitación...');
  }

  private collectTrash(): void {
    console.log('Recogiendo la basura...');
  }

  private disinfectSurfaces(): void {
    console.log('Desinfectando superficies...');
  }

  private exitRoom(): void {
    console.log('Saliendo de la habitación y marcándola como limpia.');
  }

  protected abstract specificCleaning(): void;
}
