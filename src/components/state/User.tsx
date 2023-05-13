import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
};

export const User = () => {
    // 언제나 component가 마운트될 때 user 정보가 들어올 것이 확실하다면 as 문법을 통해 빈 object를 AuthUser로 assert할 수 있다.
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name: "Dong Joon",
            email: "1234@gmail.com",
        });
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    );
};
