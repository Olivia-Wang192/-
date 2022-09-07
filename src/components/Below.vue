<template>
<div class="con">
    <div class="box">
        <div class="list">
            <div><img :src="src1" alt=""/></div>
            <div><img :src="src2" alt=""/></div>
            <div><img :src="src3" alt=""/></div>
            <div><img :src="src4" alt=""/></div>
        </div> 
    </div>
</div>
</template>

<script>
export default {
    name: 'Below',

    data() {
        return {
            src1:'images/s1.jpg',
            src2:'images/s2.jpg',
            src3:'images/s3.jpg',
            src4:'images/s4.jpg',
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.con{
            display: flex;
            margin-top:100px;
            margin-bottom:30px;
            margin-left:13px;
        }
        .box {
            border: 1px;
            width: 900px;
            position: relative;
            height: 200px;
             
        }
        .list{
            display:flex;
            position: absolute;
            left: 0px;
        }
        .list div{
            display: flex;
            justify-content: center;/*行距中*/
            align-items: center;/*列居中*/
            width: 296px;
            height: 100px;
            margin-left: 2px;
            margin-right: 2px;
            font-size: 60px;
             
        }
</style>