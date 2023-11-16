export interface Job {
    id:          number;
    created_at:  Date;
    updated_at:  Date;
    name:        string;
    description: string;
    price:       number;
    creator:     number;
    category_fk: number;
}

export interface User {
    id:         number;
    name:       string;
    surname:    string;
    email:      string;
    phone:      string;
    password:   string;
    birth:      Date;
    created_at: Date;
    updated_at: Date;
    login_fk:   number;
    status_fk:  number;
    rol_fk:     number;
}