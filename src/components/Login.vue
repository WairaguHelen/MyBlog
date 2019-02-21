<template>
    <div id="login">
        <section>
            <div class="col1">
                <h1>Welcome!!</h1>
                <p>Welcome to your blog. You will need to login for you to be able to view and manage your posts. Have fun with vuejs!</p>
            </div>
            <div class="col2">
                <form @submit.prevent>
                    <h1>Welcome Back</h1>

                    <label for="email1">Email</label>
                    <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />

                    <label for="password1">Password</label>
                    <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />

                    <button class="button">Log In</button>

                    <div class="extras">
                        <a>Forgot Password</a>
                        <a>Create an Account</a>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
const fb = require('../firebaseConfig.js')
    export default {
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                }
            }
        },
        methods(){
        login: {
    fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
        this.$store.commit('setCurrentUser', user.user)
        this.$store.dispatch('fetchUserProfile')
        this.$router.push('/dashboard')
    }).catch(err => {
        console.log(err)
    })
}
}
}
</script>