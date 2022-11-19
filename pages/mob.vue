<template>
  <div class="main">
    <div class="video-wrapper">
      <video id="myVidPlayer" controls muted autoplay></video>
    </div>
    <div class="settings-wrapper">
      <div class="settings_buttons">
        <div>
          <p>П</p>
          <input type="checkbox" name="" id="" />
        </div>
        <button>Скрыть настройки</button>
      </div>
      <div class="settings-item">
        <p>ISO</p>
        <input type="range" name="" id="" />
        <p>5000</p>
        <input type="checkbox" name="" id="" />
        <p>Автомат</p>
      </div>
      <div class="settings-item">
        <p>Усиление</p>
        <input type="range" name="" id="" />
        <p>0</p>
      </div>
      <div class="settings-item">
        <p>Выдержка</p>
        <input type="range" name="" id="" />
        <p>5000</p>
      </div>
      <div class="settings-item">
        <p>Контраст</p>
        <input type="range" name="" id="" />
        <p>0</p>
      </div>
      <div class="settings-item">
        <p>Фокус</p>
        <input type="range" name="" id="" />
        <p>9 см</p>
      </div>
      <div class="settings-item">
        <p>Масштаб</p>
        <input type="range" name="" id="" />
        <p>0</p>
      </div>
      <div class="settings-item">
        <p>Качество сборки</p>
        <input type="range" name="" id="" />
        <p>500 Кб/c</p>
      </div>
      <div class="settings-item">
        <p>Качество записи</p>
        <input type="range" name="" id="" />
        <p>20000 Кб/с</p>
      </div>
      <div class="settings-item">
        <p>Время записи</p>
        <input type="range" name="" id="" />
        <p>0 секунд</p>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  const video = document.querySelector("#myVidPlayer");
  window.navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    })
    .catch(() => {
      alert("You have give browser the permission to run Webcam and mic ;( ");
    });
});
</script>

<style scoped lang="scss">
.main {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row-reverse;
}

.video-wrapper {
  display: flex;
  width: 100%;
  height: 500px;
}

.settings_buttons {
  display: flex;
  width: 30%;
  height: auto;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  background: grey;

  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
}

.settings-wrapper {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 10px;
  background: grey;
  padding: 10px;
  border-radius: 5px;
}

.settings-item {
  display: flex;
  width: 100%;
  min-height: 50px;
  padding: 15px;
  gap: 10px;
  background: rgb(158, 158, 158);
}
</style>
