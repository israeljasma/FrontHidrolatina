export interface User {
    id?:               number;
    password:         string;
    last_login?:       Date;
    is_superuser?:     boolean;
    username:         string;
    email:            string;
    name:             string;
    last_name:        string;
    is_active?:        boolean;
    is_staff?:         boolean;
    nfc?:              number | null;
    groups?:           any[];
    user_permissions?: any[];
}
