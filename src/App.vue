<template>
    <div id="app">
        <builder></builder>
        <page id="cv"></page>
        <button @click="exportFile" class="btn-export"><i class="ic-file-pdf"></i> Export as PDF</button>
    </div>
</template>

<script>
import page from './components/Page'
import builder from './components/Builder'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default {
    components: {
        page: page,
        builder: builder
    },
    methods: {
        exportFile: function () {
            html2canvas(document.querySelector('#cv'), { scale: 4 }).then(function(canvas) {
                var img = canvas.toDataURL("image/png")
                var doc = new jsPDF('p', 'mm', 'a4')
                doc.addImage(img, 'PNG', 0, 0, 211, 298)
                doc.save('my-cv.pdf')
            })
        }
    }
}
</script>