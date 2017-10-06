<template>
    <div class="text-cover">
        <span class="display-text" v-bind:style="{'font-size': size + 'px', 'width': width + 'px'}"><slot></slot></span>
        <span class="dummy">123</span>
    </div>
</template>

<script>

    export default {
        data()
        {
            return {
                vratio: 1,
                hratio: 1,
                width: 100,
                size: 16
            }
        },
        mounted()
        {
            this.span = this.$el.getElementsByClassName('display-text')[0];
            this.dummy = this.$el.getElementsByClassName('dummy')[0];
            this.height = parseInt(document.defaultView.getComputedStyle(this.$el, null).maxHeight, 10);

            window.addEventListener('resize', this.handleResize);
            this.calculateRatio();

            this.observer = new MutationObserver(function (mutations)
            {
                this.calculateRatio();
            }.bind(this));

            this.observer.observe(
                this.span,
                { childList: true, characterData: true, subtree: true }
            );
        },
        beforeDestroy: function ()
        {
            this.observer.disconnect();
        },
        methods:
            {
                calculateRatio()
                {
                    this.dummy.innerHTML = this.span.innerHTML;
                    this.hratio = 16 / this.dummy.offsetWidth;
                    this.vratio = 16 / this.dummy.offsetHeight;
                    this.handleResize();
                },

                handleResize(event)
                {
                    this.width = this.$el.scrollWidth;
                    let sizeByWidth = this.width * this.hratio;
                    let sizeByHeight = this.height * this.vratio;
                    console.log(this.width);
                    this.size = Math.min(sizeByWidth, sizeByHeight);
                }
            }
    }

</script>

<style lang="css" scoped="">
    div.text-cover span
    {
        display: inline-block;
        overflow: hidden;
        font-size: 16px;
        white-space: nowrap;
        max-height:  100%;
    }

    div.text-cover span.dummy
    {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }
</style>