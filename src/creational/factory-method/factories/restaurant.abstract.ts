import { Hamburger } from "../interfaces/hamburger.interface.ts";

export abstract class Restaurant {
    abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }

}