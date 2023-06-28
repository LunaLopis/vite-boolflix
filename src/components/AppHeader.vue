<script>

export default {
    data() {
        return {
            links: [
                {
                    label: 'Home',
                    icon: '',
                    href: '#',
                    active: false
                },
                {
                    label: 'Serie tv',
                    icon: '',
                    href: '#',
                    active: false
                },
                {
                    label: 'Film',
                    icon: '',
                    href: '#',
                    active: false
                },
                {
                    label: 'Originali',
                    icon: 'fa-solid fa-magnifying-glass',
                    href: '#',
                    active: false
                },
                {
                    label: 'Aggiunti di recente',
                    icon: 'fa-solid fa-download',
                    href: '#',
                    active: false
                },
                {
                    label: 'La mia lista',
                    icon: 'fa-solid fa-user',
                    href: '#',
                    active: false
                },
                {
                    label: '',
                    icon: 'fa-solid fa-right-to-bracket',
                    href: '#',
                    active: false
                },

            ],

        }
    },
    methods: {
        setActiveLink(index) {
            this.links.forEach(link => {
                link.active = false;
            });
            this.links[index].active = true;
        }
    },
}
</script>

<template >
    <div class="">
        <div class="content d-flex justify-content-between">
            <div class="d-flex">
                <h1 class="style-title">Boolflix</h1>
                <ul class="navbar">
                    <li v-for="(link, index) in links" :key="index" class="nav-text">
                        <a class="font-size" :href="link.href" :class="{ 'active': link.active }"
                            @click="setActiveLink(index)">
                            {{ link.label.toUpperCase() }}
                        </a>

                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="(link, index) in links" :key="index">
                        <a :href="link.href" :class="{ 'active': link.active }" @click="setActiveLink(index)">
                            <i :class="link.icon" class="text-white"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
li {
    display: inline-block;
    font-size: 20px;
    padding-left: 20px;
    color: white;
    padding-top: 10px;

}

.nav-text {
    padding-top: 0px;
}

a {
    color: white;
}

.font-size {
    color: white;
    font-size: small;
}

.text-white {
    color: white;
}

.style-title {
    color: red;
    font-weight: 900;
}
</style>