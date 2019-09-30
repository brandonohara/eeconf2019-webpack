<template>
    <div class="post">
        <div class="metadata">
            <p class="flex-grow-1">
                <img src="https://cdn.vox-cdn.com/thumbor/H8QgpPd0LPejMcEQ1a448BnZiC0=/0x0:600x600/1400x1400/filters:focal(252x252:348x348):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/60823613/357a79e5befe5adefeb1d12050ed95fc_square_fullsize.0.1534190090.png" />
                {{ post.author.first + ' ' + post.author.last }}
                <span class="fas fa-check verified" v-if="verified()"></span>
                <br>
                <a :href="'/users/' + post.author.handle" class="text-muted">@{{ post.author.handle }}</a>
            </p>
            <p class="text-muted">
                {{ post.relative_date }}
            </p>
        </div>
        <div class="text">
            <p>{{ post.text }}</p>
        </div>
        <div class="media">
            <img :src="post.url" :alt="post.text" class="img-fluid" />
        </div>
        <div class="actions">
            <a @click="favorite" class="btn">
                {{ post.comments.length }} <span class="fas fa-fw fa-comment-alt"></span>
            </a>
            <a @click="favorite" class="btn icon-shake">
                {{ post.favorites }} <span class="fas fa-fw fa-bone"></span>
            </a>
            <a @click="favorite" class="btn">
                <span class="fas fa-fw fa-share"></span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            'post': {
                type: Object,
                required: true
            }
        },
        methods: {
            favorite() {

            },
            verified() {
                return this.post.author.first != 'Toby';
            }
        }
    }
</script>
