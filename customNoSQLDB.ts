interface DataBase {
  get: (key: string) => string;
  set: (key: string, value: string) => void;
}

class ConventionNoSQLDB implements DataBase {
  protected db: Record<string, string> = {};
  get(key: string): string {
    return this.db[key];
  }

  set(key: string, value: string) {
    this.db[key] = value;
  }
}

const db = new ConventionNoSQLDB();
db.set('key', '123');
console.log(db.get('key'));