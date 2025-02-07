import { COLORS } from '../../../../libs/colors.ts';
import { QueryBuilder } from '../builders/query.builder.ts';

export class QueryService {
  public static execute() {
    const usersQuery = new QueryBuilder()
      .from('users')
      .select('id', 'name', 'email')
      .where('age > 20')
      .where("country = 'CHI'")
      .orderBy('name', 'DESC')
      .orderBy('age', 'DESC')
      .limit(100)
      .execute();

    console.log('%cConsulta:', COLORS.red);
    console.log(usersQuery);
  }
}
