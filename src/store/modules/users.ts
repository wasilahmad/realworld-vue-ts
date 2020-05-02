import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { loginUser, fetchProfile } from '@/store/api';
import { User, Profile, UserSubmit } from '@/store/models/users';


@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true
})

class UsersModule extends VuexModule {
    user: User | null = null
    profile: Profile | null = null

    get getUserName() {
        return this.user && this.user.username || null;
    }

    @Mutation
    setUser(user: User) { this.user = user }

    @Mutation
    setProfile(profile: Profile) { this.profile = profile }
    
    @Action({ commit: 'setUser', rawError: true })
    async login(userSubmit: UserSubmit){
        const user = await loginUser(userSubmit)
        return user;
    }

    @Action({ commit: 'setProfile'})
    async loadProfile(username: string) {
        const profile = await fetchProfile(username)
        return profile;        
    }
}

export default getModule(UsersModule);