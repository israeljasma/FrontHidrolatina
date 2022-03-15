export interface Ppe {
    id:            number;
    helmet:        boolean;
    headphones:    boolean;
    goggles:       boolean;
    gloves:        boolean;
    boots:         boolean;
    date:          Date;
    created_date:  Date;
    modified_date: Date;
    user:          User;
}

export interface User {
    id:        number;
    username:  string;
    name:      string;
    last_name: string;
}