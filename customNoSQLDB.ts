interface DataBase<T> {
    id: string;
    value: T;
    get: (id: string)=> T;
    set:(value: T)=> void; 
}

class ConventionNoSQLDB<T> implements DataBase<T>{
    


    get<T>: (id: string) =>{
        return {} 
    }
    set: (value: T) => {}
}