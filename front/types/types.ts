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
