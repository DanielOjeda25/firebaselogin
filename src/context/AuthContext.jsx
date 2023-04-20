import { createContext, useContext, useEffect , useState} from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";
export const AuthContext = createContext();
/* Con esto podre usar el context globalmente */
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("No context");
	return context;
};
/* y aqui le pasare los valores o funciones a los que quiero acceder globalmente */
export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)
	useEffect(() => {
		onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
		})
	})
	
	/* esta funcion sera para registrar un usuario nuevo */
	const signUp = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password);
	};

	const logOu 	t = ()
	
	return (
		<AuthContext.Provider value={{ signUp, login , user}}>
			{children}
		</AuthContext.Provider>
	);
}
