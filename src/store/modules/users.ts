import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { loginUser } from '@/store/api';
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

    @Mutation
    setUser(user: User) { this.user = user }

    @Action({ commit: 'setUser', rawError: true })
    async login(userSubmit: UserSubmit){
        const user = await loginUser(userSubmit)
        return user
    }
}

export default getModule(UsersModule);