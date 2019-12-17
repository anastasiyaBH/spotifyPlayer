export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "858cdd52540d4e7caa0e02149ba44726";
export const redirectUri = `http://localhost:3000/`
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];