import { MenuItem } from '../components/menu-item.component.ts';
import { MenuCategory } from '../composites/menu-category.component.ts';

export class MenuService {
  static main() {
    // Crear ítems individuales
    const salad = new MenuItem('Ensalada', 5.99);
    const soup = new MenuItem('Sopa de tomate', 4.99);
    const steak = new MenuItem('Bistec', 15.99);
    const soda = new MenuItem('Refresco', 2.5);
    const dessert = new MenuItem('Pastel de chocolate', 6.5);
    const coffee = new MenuItem('Café', 1.99);

    // Crear categorías de menú y añadir ítems
    const appetizers = new MenuCategory('Entradas');
    appetizers.add(salad);
    appetizers.add(soup);

    const mainCourse = new MenuCategory('Plato Principal');
    mainCourse.add(steak);

    const beverages = new MenuCategory('Bebidas');
    beverages.add(soda);
    beverages.add(coffee);

    const desserts = new MenuCategory('Postres');
    desserts.add(dessert);

    const hamburguesa = new MenuItem('Hamburguesa', 10.99);
    const pizza = new MenuItem('Pizza', 12.99);
    const tacos = new MenuItem('Tacos', 8.99);
    const hotdog = new MenuItem('Hotdog', 5.99);
    const sandwich = new MenuItem('Sandwich', 7.99);
    const pasta = new MenuItem('Pasta', 9.99);

    const fastFood = new MenuCategory('Comida Rápida');
    fastFood.add([hamburguesa, pizza, tacos, hotdog, sandwich, pasta]);

    // Crear un menú principal que contiene todas las categorías
    const mainMenu = new MenuCategory('Menú Principal');
    mainMenu.add([appetizers, beverages, desserts, mainCourse, fastFood]);

    // Mostrar la estructura completa del menú
    console.log('Menú del Restaurante:');
    mainMenu.showDetails();
  }
}
