<template>
    <div id="app">
        <builder></builder>
        <page></page>
    </div>
</template>

<script>
import page from './components/Page'
import builder from './components/Builder'
export default {
    components: {
        page: page,
        builder: builder
    }
}
</script>