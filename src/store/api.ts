import axios from 'axios';
import { User, UserSubmit, UserResponse } from '@/store/models/users';
import { ArticlesResponse } from '@/store/models/articles';

// Set config defaults when creating the instance
export const conduitApi = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
});

export function setJWT( jwt: string ) {
    // Alter defaults after instance has been created
    conduitApi.defaults.headers.common['Authorization'] = `Token ${jwt}`;
}

export function clearJWT( jwt: string ) {
    delete conduitApi.defaults.headers.common['Authorization'];
}

export async function loginUser( user: UserSubmit ): Promise<User> {
    // try {
        const response = await conduitApi.post('/users/login', {
            user,
        });
        console.log(response)
        return (response.data as UserResponse).user; 
    // } catch(err) {
    //     console.error(err);
    // }       
}


export async function getGlobalFeed() {
    const response = await conduitApi.get('/articles')
    return response.data as ArticlesResponse;
}
