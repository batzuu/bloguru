import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

// Very simple hook to save time
// by not having to write miltiple lines
// for importing and making
// auth context in every file in which
// it is used
function useAuth() {
	return useContext(AuthContext);
}

export default useAuth;
