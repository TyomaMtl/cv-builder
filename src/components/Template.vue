<template>
    <div>
        Firstname : {{ datas.profile.firstname }}
        Lastname : {{ datas.profile.lastname }}
        E-Mail : {{ datas.profile.email }}
        Website : {{ datas.profile.website }}
        Phone : {{ datas.profile.phone }}
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            
        }
    },
    computed: {
        datas: function () {
            return this.$store.state.datas
        }
    }
}
</script>