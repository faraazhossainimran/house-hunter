import axios from 'axios';
const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosPUblic = () => {
    return axiosPublic;
}
export default useAxiosPUblic;