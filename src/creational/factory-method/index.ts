import { RestaurantService } from "./services/restaurant.service.ts";

export const mainFactory = () => { 

    const restaurant = new RestaurantService();
    restaurant.createHamburger()

}
