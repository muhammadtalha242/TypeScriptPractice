interface DataBase {
  get: (id: string) => string;
  set: (value: string) => void;
}

class ConventionNoSQLDB implements DataBase {
  get(id: string): string {
    return "";
  }

  set(value: string) {}
}
