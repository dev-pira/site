import {
  GoogleAuthProvider,
  User,
  UserCredential,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../services/firebase";

type AuthContextType = {
  user: User | null;
  logOut: () => Promise<void>;
  logIn: () => Promise<UserCredential | null>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  logOut: () => Promise.resolve(),
  logIn: () => Promise.resolve<UserCredential | null>(null),
});

export function useAuth() {
  return useContext(AuthContext);
}

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: Readonly<AuthProviderProps>) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser),
    );
    return () => unsubscribe();
  }, [user]);

  const logOut = async () => await signOut(auth);

  const logIn = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider value={{ user, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}
