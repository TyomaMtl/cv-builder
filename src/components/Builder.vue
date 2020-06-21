<template>
    <div class="builder">
        <div class="nav">
            <div v-on:click="section = 'profile'">
                <span>Profile</span>
            </div>
            <div v-on:click="section = 'languages'">
                <span>Languages</span>
            </div>
            <div v-on:click="section = 'skills'">
                <span>Skills</span>
            </div>
            <div v-on:click="section = 'experiences'">
                <span>Experiences</span>
            </div>
            <div v-on:click="section = 'studies'">
                <span>Studies</span>
            </div>
        </div>
        
        <!-- PROFILE -->
        <div class="section" v-if="section == 'profile'">
            <h3>Profile</h3>
            <input type="text" v-model="datas.profile.firstname" placeholder="Firstname">
            <input type="text" v-model="datas.profile.lastname" placeholder="Lastname">
            <input type="email" v-model="datas.profile.email" placeholder="E-Mail">
            <input type="text" v-model="datas.profile.phone" placeholder="Phone">
            <input type="text" v-model="datas.profile.website" placeholder="Website">
        </div>

        <!-- LANGUAGES -->
        <div class="section" v-if="section == 'languages'">
            <h3>Languages</h3>
            <a href="#" v-on:click="addLanguage" class="btn add">Add language</a>
            <div v-for="(language, index) in datas.languages" :key="index" class="form-section">
                <div class="title">Langue {{ index+1 }}</div>
                <a href="#" v-on:click="removeLanguage(index)" class="btn remove">Remove</a>
                <input type="text" v-model="language.name" placeholder="Langue">
                <input type="text" v-model="language.level" placeholder="Niveau">
            </div>
        </div>

        <!-- SKILLS -->
        <div class="section" v-if="section == 'skills'">
            <h3>Skills</h3>
            <input v-on:keydown.enter="addSkill" type="text" v-model="newSkill" placeholder="Skill">
            <ul class="tags">
                <li v-for="(skill, index) in datas.skills" :key="index" v-on:click="removeSkill(index)">{{ skill.name }}</li>
            </ul>
        </div>

        <!-- EXPERIENCES -->
        <div class="section" v-if="section == 'experiences'">
            <h3>Experiences</h3>
            <a href="#" v-on:click="addExperience" class="btn add">Add experience</a>
            <div v-for="(experience, index) in datas.experiences" :key="index" class="form-section">
                <div class="title">Experience {{ index+1 }}</div>
                <a href="#" v-on:click="removeExperience(index)" class="btn remove">Remove</a>
                <input type="text" v-model="experience.company" placeholder="Company">
                <input type="text" v-model="experience.title" placeholder="Title or role">
                <div class="side">
                    <input type="text" v-model="experience.start" placeholder="Form">
                    <input type="text" v-model="experience.end" placeholder="To">
                </div>
                <textarea v-model="experience.description" placeholder="Description"></textarea>
            </div>
        </div>

        <!-- STUDIES -->
        <div class="section" v-if="section == 'studies'">
            <h3>Studies</h3>
            <a href="#" v-on:click="addStudy" class="btn add">Add study</a>
            <div v-for="(study, index) in datas.studies" :key="index" class="form-section">
                <div class="title">Study {{ index+1 }}</div>
                <a href="#" v-on:click="removeStudy(index)" class="btn remove">Remove</a>
                <input type="text" v-model="study.school" placeholder="School name">
                <input type="text" v-model="study.title" placeholder="Title">
                <div class="side">
                    <input type="text" v-model="study.start" placeholder="From">
                    <input type="text" v-model="study.end" placeholder="To">
                </div>
                <input type="text" v-model="study.where" placeholder="Where ?">
                <textarea v-model="study.description" placeholder="Description"></textarea>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data: function () {
        return {
            section: 'profile',
            newSkill: '',
            datas: {
                profile: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    website: ''
                },
                languages: [
                    { name: '', level: '' }
                ],
                skills: [],
                experiences: [
                    { 
                        title: '',
                        company: '',
                        from: '',
                        to: '',
                        description: ''
                    }
                ],
                studies: [
                    {
                        school: '',
                        title: '',
                        start: '',
                        end: '',
                        where: '',
                        description: ''
                    }
                ]
            },
            languagesForms: 2
        }
    },
    methods: {
        addLanguage: function () {
            this.datas.languages.push({ name: '', level: '' })
        },
        removeLanguage: function (index) {
            this.datas.languages.splice(index, 1)
        },
        addSkill: function () {
            this.datas.skills.push({ name: this.newSkill })
            this.newSkill = '' // reset skill value
        },
        removeSkill: function (index) {
            this.datas.skills.splice(index, 1)
        },
        addExperience: function () {
            this.datas.experiences.push({ title: '', company: '', from: '', to: '', description: '' })
        },
        removeExperience: function (index) {
            this.datas.experiences.splice(index, 1)
        },
        addStudy: function () {
            this.datas.studies.push({ school: '', title: '', start: '', end: '', where: '', description: '' })
        },
        removeStudy: function (index) {
            this.datas.studies.splice(index, 1)
        }
    }
}
</script>