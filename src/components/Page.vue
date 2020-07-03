<template>
    <div class="page" v-on:mousedown="move" v-on:wheel="zoom">
        <page-template></page-template>
    </div>
</template>

<script>
import pageTemplate from './Template'

export default {
    data: function () {
        return {
            scale: 0.5 // page zoom
        }
    },
    components: {
        pageTemplate: pageTemplate
    },
    methods: {
        move: function (event) {
            /* eslint-disable no-console */

            let x = event.clientX
            let y = event.clientY

            let el = event.target
            let style = getComputedStyle(el)
            
            // initial positions
            let posY = Number(style.top.slice(0, -2))
            let posX = Number(style.left.slice(0, -2))

            el.onmousemove = function(e) {
                let moveX = x - e.clientX
                let moveY = y - e.clientY
                x = e.clientX
                y = e.clientY

                posX = posX - moveX 
                posY = posY - moveY 

                el.style.left = posX + 'px'
                el.style.top = posY + 'px'
            }

            el.onmouseup = function() {
                el.onmousemove = null
            }
        },
        zoom: function (event) {
            let el = event.target

            if (event.deltaY > 0) {
                if (this.scale > 0.1) {
                    this.scale = this.scale - 0.01
                }
            } 
            
            if (event.deltaY < 0) {
                this.scale = this.scale + 0.01
            }
            
            el.style.transform = 'scale(' + this.scale + ')'
        }
    }
}
</script>