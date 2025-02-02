/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 */

import { QueryBuilderI } from '../interfaces/query-builder.interface.ts';

//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 * 
 ** Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

//! Solución
export class QueryBuilder implements QueryBuilderI {
  table: string;
  fields: string[] = [];
  conditions: string[] = [];
  orderFields: string[] = [];
  limitCount?: number | undefined;

  select(...fields: string[]): QueryBuilderI {
    this.fields = fields;
    return this;
  }

  from(table: string): QueryBuilderI {
    this.table = table;
    return this;
  }

  where(condition: string): QueryBuilderI {
    this.conditions.push(condition);
    return this;
  }

  orderBy(field: string, order: 'ASC' | 'DESC' = 'DESC'): QueryBuilderI {
    this.orderFields.push(`${field} ${order}`);
    return this;
  }

  limit(limit: number): QueryBuilderI {
    this.limitCount = limit;
    return this;
  }

  execute(): string {
    const fields = this.fields.length ? this.fields.join(', ') : '*';
    const conditions = this.conditions.length ? `where ${this.conditions.join(' and ')}` : '';
    const orderFields = this.orderFields.length ? `order by ${this.orderFields.join(', ')}` : '';
    const limit = this.limitCount ? `limit ${this.limitCount}` : '';

    return `Select ${fields} from ${this.table} ${conditions} ${orderFields} ${limit};`.trim().toUpperCase();
  }
}
