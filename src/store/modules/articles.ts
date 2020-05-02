import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { Article } from '@/store/models/articles';
import * as api from '@/store/api';
type FeedType = 'global' | 'user';

@Module({
    namespaced: true,
    name: "articles",
    dynamic: true,
    store
})

class ArticlesModule extends VuexModule {
    feed: Article[] = []

    @Mutation
    setFeed(articles: Article[]) {
        this.feed = articles
    }

    @Action({commit:'setFeed'})
    async refreshFeed(feedType: FeedType) {
        const feed = await api.getFeed();
        return feed.articles
    }
}

export default getModule(ArticlesModule);