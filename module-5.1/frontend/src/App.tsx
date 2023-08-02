import { useEffect, useState } from "react";

interface spotifyToken {
    access_token: string;
    refresh_token: string;
}

interface spotifyUser {
    display_name: string;
}

function App() {
    const handleClick = () => {
        window.location.href = "http://localhost:3000/auth/redirect";
    };

    const [accessToken, setAccessToken] = useState<spotifyToken["access_token"] | null>(null);
    const [user, setUser] = useState<spotifyUser["display_name"] | null>(null);
    const [isAuhtenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setAccessToken(urlParams.get("access_token"));

        if (accessToken) {
            fetch("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUser(data.display_name);
                    setIsAuthenticated(true);
                })
        }

    }, [accessToken]);

    return (
        <div className="min-h-screen grid place-content-center">
            <h1 className="text-2xl font-medium">Welcome to Generasi Gigih 3.0</h1>

            {isAuhtenticated ? (
                <h2 className="text-xl font-medium text-center mt-4">{user}</h2>
            ) : (
                <button className="btn btn-success mt-6" onClick={handleClick}>Login With Spotify</button>
            )}
        </div>
    );
}

export default App;