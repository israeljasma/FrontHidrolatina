export interface AuthResponse {
    token:           string;
    "refresh-token": string;
    user:             User;
    message:         string;
}

export interface User {
    username:  string;
    email:     string;
    name:      string;
    last_name: string;
}

export interface UserAuth {
    username:         string;
    email:            string;
    name:             string;
    last_name:        string;
    token?:           string;
    "refresh-token"?: string;
}
