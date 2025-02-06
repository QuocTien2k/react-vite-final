import axios from "./axios.customize";
const createUserAPI = (fullName, email, password, phone) =>{
    const URL_BACKEND = '/api/v1/user';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    };
    return axios.post(URL_BACKEND, data)
}

const updateUserAPI = (_id, fullName, phone) =>{
    const URL_BACKEND = '/api/v1/user';
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    };
    return axios.put(URL_BACKEND, data)

}

const deleteUserAPI = (id) =>{
    const URL_BACKEND = `/api/v1/user/${id}`;

    return axios.delete(URL_BACKEND, id);
}

const fetchAllUserAPI = (current, pageSize) =>{
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND)

}

const handleUploadFile = (file, folder) => {
    const URL_BACKEND = '/api/v1/file/upload';
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }

    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);

    return axios.post(URL_BACKEND, bodyFormData, config)
}

const updateUserAvatarAPI = (avatar, _id, fullName, phone) => {
    const URL_BACKEND= "/api/v1/user";
    const data= {
        _id: _id,
        avatar: avatar,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data)

}

const registerUserAPI = (fullName, email, password, phone) =>{
    const URL_BACKEND = '/api/v1/user/register';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    };
    return axios.post(URL_BACKEND, data)
}

const loginAPI = (email, password) =>{
    const URL_BACKEND = '/api/v1/auth/login';
    const data = {
        username: email,
        password: password, 
    };
    return axios.post(URL_BACKEND, data)
}

const getAccountAPI = () =>{
    const URL_BACKEND = '/api/v1/auth/account';
   
    return axios.get(URL_BACKEND)
}

const logoutAPI = () =>{
    const URL_BACKEND = '/api/v1/auth/logout';
   
    return axios.post(URL_BACKEND)
}

export {
    createUserAPI, updateUserAPI, deleteUserAPI, 
    fetchAllUserAPI, handleUploadFile, updateUserAvatarAPI,
    registerUserAPI, loginAPI, getAccountAPI, logoutAPI
};