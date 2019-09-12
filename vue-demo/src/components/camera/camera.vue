<template>
  <div id="camera">
    <div id="contentHolder">
        <video id="video" width="300" height="300" autoplay></video>
        <canvas style="display:none;" id="canvas" width="300" height="300"></canvas>
    </div>
    <div id="btn_snap" @click="playPic">拍照</div>
  </div>
</template>
<script>
export default {
  mounted() {
    let canvas = document.getElementById("canvas"),
        pzBtn = document.getElementById("btn_snap"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video")
    // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }
    if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
            // 首先获取现存的getUserMedia(如果存在)
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            // 有些浏览器不支持，会返回错误信息
            // 保持接口一致
            if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }
            //否则，使用Promise将调用包装到旧的navigator.getUserMedia
            return new Promise(function (resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
            });
        }
    }
    let constraints = { audio: false, video: {width: 720,height:720} }
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            var video = document.querySelector('video')
            // 旧的浏览器可能没有srcObject
            if ("srcObject" in video) {
                video.srcObject = stream;
            } else {
                //避免在新的浏览器中使用它，因为它正在被弃用。
                video.src = window.URL.createObjectURL(stream);
            }
            video.onloadedmetadata = function (e) {
                video.play();
            }
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message)
        })
  },
  methods: {}
}
</script>
<style scoped>

</style>