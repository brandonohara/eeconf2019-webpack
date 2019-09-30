<template>
    <div class="post-form">
        <div v-if="!success">
            <p v-for="(error, field) in errors" class="post-message text-danger">{{ error[0] }}</p>
            <div class="form-group">
                <textarea v-model="form.text" placeholder="Got something to Wuphf about?" class="form-control"></textarea>
            </div>
            <div class="form-group" v-if="form.text.length">
                <input type="text" v-model="form.url" class="form-control" placeholder="Image URL" />
            </div>
            <div class="d-flex align-items-center" v-if="form.text.length">
                <p class="m-0 flex-grow-1 text-muted">
                    <small>{{ form.text.length }} / 255</small>
                    <small v-text="validation()" class="ml-1 text-primary"></small>
                </p>
                <button @click="submit()" class="btn btn-primary">Wuphf!</button>
            </div>
        </div>
        <div v-if="success">
            <p class="post-message">
                WUPHF. You're wuphf has been submitted and is awaiting approval.
                <br><br>
                <button @click="reset()" class="btn btn-primary">Another WUPHF!</button>
            </p>
        </div>
    </div>
</template>

<script>
    let woof = require('./../helpers/woof').default;
    import {Howl, Howler} from 'howler';

    export default {
        data() {
            return {
                success: false,
                loading: false,
                errors: {},
                form: {
                    text: '',
                    url: ''
                }
            };
            
        },
        methods: {
            submit() {
                this.errors = {};
                this.loading = true;
                let domain = 'http://wuphf.test/';
                axios.post(domain + 'api/v1/wuphfs', this.form)
                .then(response => {
                    console.log(response);
                    this.success = true;
                    woof.play();
                }, error => {
                    console.log(error.response.data.errors);
                    this.errors = error.response.data.errors;
                });

            },
            validation() {
                if (this.form.text.length < 5 ) {
                    return 'Must be at least 5 characters';
                }
                if (this.form.text.length > 255 ) {
                    return 'Must be fewer than 255 characters';
                }
                if (this.form.url.length == 0) {
                    return 'Must enter a valid url.';
                }

                return 'WUPHF!';
            },
            reset() {
                this.success = false;
                this.errors = {};
                this.loading = false;
                this.form = {
                    'text': '',
                    'url': ''
                };
            }
        }
    }
</script>
