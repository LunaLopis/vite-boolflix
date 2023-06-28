<script>

export default {
    data() {
        return {
            links: [
                {
                    label: 'Home',
                    icon: 'fa-solid fa-magnifying-glass',
                    href: '#',
                    active: false
                },
                {
                    label: 'Serie tv',
                    icon: 'fa-solid fa-magnifying-glass',
                    href: '#',
                    active: false
                },
                {
                    label: 'Film',
                    icon: 'fa-solid fa-magnifying-glass',
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
                    icon: 'fa-solid fa-magnifying-glass',
                    href: '#',
                    active: false
                },
                {
                    label: 'La mia lista',
                    icon: 'fa-solid fa-magnifying-glass',
                    href: '#',
                    active: false
                },
                {
                    label: '',
                    icon: 'fa-solid fa-house',
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
                <h1>Boolflix</h1>
                <ul class="navbar">
                    <li v-for="(link, index) in links" :key="index">
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
</style>