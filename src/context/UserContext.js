import {useState,createContext} from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const initialUser = {
        token: null,
        info: {
            name: 'Guest',
            email: null
        }
    };
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || initialUser));

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children} 
        </UserContext.Provider>
    );
}