
import { setLoading, setUsers, setError } from '../reducers/usersSlice'

const fetchAllUsers = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await fetch("http://localhost:4000/posts");
        const data = await response.json();
        dispatch(setUsers(data));
    } catch (err) {
        dispatch(setError(err.message));
    }
};
export default fetchAllUsers