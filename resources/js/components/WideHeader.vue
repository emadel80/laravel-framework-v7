<template>
    <div class="text-center">
        <div
            class="header-title">
            {{ title }}
        </div>
        <v-divider></v-divider>
        <div class="links">
            <v-btn 
                v-for="link in decodedLinks" 
                :key="link.text"
                :href="link.url"
                text
                rounded>
                {{ link.text }}
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'links'],
    computed: {
        decodedLinks() {
            return JSON.parse(this.links);
        }
    }
}
</script>

<style scoped>
    hr {
        margin-top: 0;
        margin-bottom: 1.4rem;
    }

    .header-title {
        font-size: 84px;
        font-weight: 600;
        margin-bottom: 0;
    }

    .header-title, .links > a {
        color: #636b6f
    }

    .links > a {
        padding: 0 25px;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }
</style>