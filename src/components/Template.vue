<template>
    <div>
        <header :style="background">
            <h1 :style="h1">{{ datas.profile.firstname }} {{ datas.profile.lastname }}</h1>
            <p :style="font1">{{ datas.profile.title }}</p>
        </header>
        <aside :style="background">
            <img :src="datas.profile.image">
            <h3 :style="h3">Resume</h3>
            <p :style="font1">{{ datas.profile.resume }}</p>
            <p :style="font1">{{ datas.profile.email }}</p>
            <p :style="font1">{{ datas.profile.website }}</p>
            <p :style="font1">{{ datas.profile.phone }}</p>
            <h3>Languages</h3>
            <ul>
                <li :style="font1" v-for="(lang, index) in datas.languages" :key="index">{{ lang.name }}</li>
            </ul>
            <h3 :style="h3">Hobbies</h3>
            <ul>
                <li :style="font1" v-for="(hobbie, index) in datas.hobbies" :key="index">{{ hobbie.name }}</li>
            </ul>
        </aside>
        <content>

            <h2 :style="h2">Skills</h2>
            <ul>
                <li v-for="(skill, index) in datas.skills" :key="index">{{ skill.name }}</li>
            </ul>
            
            <h2 :style="h2">Experiences</h2>
            <div v-for="(xp, index) in datas.experiences" :key="index">
                <h3 :style="h3">{{ xp.company }}</h3>
                <p :style="font2">{{ xp.title }}<span v-if="xp.start || xp.end">/</span> <span>{{ xp.start }}</span> <span v-if="xp.start && xp.end">-</span> <span>{{ xp.end }}</span></p>
                <p :style="font3" v-if="xp.description">{{ xp.description }}</p>
            </div>

            <h2 :style="h2">Studies</h2>
            <div v-for="(study, index) in datas.studies" :key="index">
                <h3 :style="h3">{{ study.school }}</h3>
                <p :style="font2">{{ study.title }}<span v-if="study.start || study.end">/</span> <span>{{ study.start }}</span> <span v-if="study.start && study.end">-</span> <span>{{ study.end }}</span></p>
                <p :style="font3">{{ study.description }}</p>
            </div>

        </content>
    </div>
</template>

<style scoped>
div {
    font-family: Arial, Helvetica, sans-serif;
    color: #494949;
}
img {
    display: block;
    margin: 0 auto 2cm auto;

    width: 5cm;
    height: 5cm;
    
    border-radius: 50%;
    background: #FFF;
}
h3 {
    margin-bottom: 0px;
}
aside {
    display: block;
    float: left;
    padding: 1cm;

    width: 7cm;
    height: 29.7cm;
}
header {
    display: block;
    margin-top: 2cm;
    float: right;
    width: calc(21cm - 7cm);
    height: 3cm;
}
header > h1, header > p {
    padding-left: 20px;
    text-transform: uppercase;
}
header > h1 {
    margin-top: 24px;
    margin-bottom: 6px;
}
header > p {
    margin-top: 0px;
    font-size: 20px;
    letter-spacing: 1px;
}
content {
    float: right;
    padding-left: 20px;
    width: calc(21cm - 7cm);
    height: calc(29.7cm - 5cm);
}
</style>

<script>
export default {
    data: function () {
        return {
            
        }
    },
    computed: {
        datas: function () {
            return this.$store.state.datas
        },
        h1: function () {
            return 'color:' + this.datas.colors.h1 + ';'
        },
        h2: function () {
            return 'color:' + this.datas.colors.h2 + ';'
        },
        h3: function () {
            return 'color:' + this.datas.colors.h3 + ';'
        },
        font1: function () {
            return 'color:' + this.datas.colors.font1 + ';'
        },
        font2: function () {
            return 'color:' + this.datas.colors.font2 + ';'
        },
        font3: function () {
            return 'color:' + this.datas.colors.font3 + ';'
        },
        background: function () {
            return 'background-color:' + this.datas.colors.background + ';'
        }
    }
}
</script>