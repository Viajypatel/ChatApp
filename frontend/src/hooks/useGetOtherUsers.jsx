import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';
import { BASE_URL } from '..';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`${BASE_URL}/api/v1/user`);
                // Log the result
                console.log("other users -> ", res);
                // Dispatch the action to update the store
                dispatch(setOtherUsers(res.data));
            } catch (error) {
                console.log(error);
            }
        };

        fetchOtherUsers();
    }, [dispatch]); // Add dispatch to the dependency array
};

export default useGetOtherUsers;
