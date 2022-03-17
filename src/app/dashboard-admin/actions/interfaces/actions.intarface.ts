export interface ActionDetection {
    id:               number;
    operator_present: boolean;
    action:           Action;
    risk:             Risk;
    hour:             string;
    date:             Date;
    user:             User;
    created_date:     Date;
    modified_date:    Date;
}

export interface Action {
    id:     number;
    action: string;
}

export interface Risk {
    id:   number;
    risk: string;
}

export interface User {
    id:        number;
    username:  string;
    name:      string;
    last_name: string;
}