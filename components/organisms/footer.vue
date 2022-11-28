<template>
  <div class="footer">
    <div class="content-box">
      <img src="@/assets/imgs/telegram.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  display: flex;
  width: 100%;
  height: 80px;
  background: #0b2d50;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;

  @media (max-width: 1024px) {
    height: 60px;
  }

  @media (max-width: 425px) {
    height: 50px;
  }

  .content-box {
    text-align: center;
    img {
      width: 50px;
      height: 50px;

      @media (max-width: 1024px) {
        height: 30px;

        width: 30px;
      }
    }
    p {
      color: #fff;
      font-size: 16px;
      line-height: 17px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 15px;
      }

      @media (max-width: 425px) {
        font-size: 12px;
        line-height: 13px;
      }
    }
  }
}
</style>
