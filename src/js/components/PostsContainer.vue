<template>
    <div class="posts-container">
        <post :post="post" v-for="post in posts" v-bind:key="post.id"></post>
        <div class="post-message" v-if="loading">
            <p>Loading...</p>
        </div>
        <div class="post-message" v-if="endReached">
            <p>No more posts. Get a life.</p>
        </div>
        <div class="post-message" v-if="!loading && !endReached">
            <p>
                <button type="button" @click="loadMore()" class="btn btn-primary">
                    Load More
                </button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
                limit: 3,
                page: 1,
                loading: false,
                endReached: false,
                featured: 0,
                posts: []
            };
        },
        methods: {
            getWuphfs() {
                this.loading = true;
                let domain = 'http://wuphf.test/';
                axios.get(domain + 'api/v1/wuphfs', {
                    params: {
                        'featured': this.featured,
                        'limit': this.limit, 
                        'page': this.page
                    }
                })
                .then(response => {
                    console.log(response.data);
                    let data = response.data.data;

                    if (data.length == 0 || data.length < this.limit) {
                        this.endReached = true;
                    }

                    this.posts = _.concat(this.posts, data);
                    this.loading = false;
                });
            },

            loadMore() {
                if (this.endReached) {
                    return false;
                }
                this.page++;
                this.getWuphfs();
            }
        },
        mounted() {
            this.getWuphfs();
        }
    }
</script>
