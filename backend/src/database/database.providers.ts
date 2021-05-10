import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://admin:adminpassword@127.0.0.1:27017/pt-database?authSource=admin'),
  },
];