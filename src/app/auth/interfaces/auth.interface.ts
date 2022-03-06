export interface User {
    id:         number;
    last_login: Date | null;
    username:   string;
    email:      string;
    name:       string;
    last_name:  string;
    nfc:        number | null;
}