interface DataBase<T, U> {
  get: (key: U) => T;
  set: (key: U, value: T) => void;
}

type DBKeyTypes = string | number | symbol;
class ConventionNoSQLDB<T, U extends DBKeyTypes> implements DataBase<T, U> {
  protected db: Record<U, T> = {} as Record<U, T>;
  get(key: U): T {
    return this.db[key];
  }

  set(key: U, value: T) {
    this.db[key] = value;
  }
}

const db = new ConventionNoSQLDB();
db.set("key", "123");
console.log(db.get("key"));
