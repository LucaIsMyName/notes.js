/**
 * We have an SQL Lite DB  and we want to access the DB in any way imaginable.
 */

import { Database } from 'sqlite3';

export class DatabaseService {
  private db: Database;

  constructor() {
    this.db = new Database(':memory:');
  }

  public query(sql: string, callback: (err: Error | null, rows: any[]) => void) {
    this.db.all(sql, callback);
  }
}