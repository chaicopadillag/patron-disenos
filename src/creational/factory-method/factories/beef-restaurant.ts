import { BeefHamburger } from '../products/beef-hamburger.ts';
import { Restaurant } from "./restaurant.abstract.ts";

export class BeefRestaurant extends Restaurant {
    createHamburger() {
        return new BeefHamburger();
    }
};
