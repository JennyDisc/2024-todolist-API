<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md"></div>
      <div class="col-12 col-sm-11 col-md-9 col-lg-6">
        <h1 class="mb-3">簡易今日代辦紀錄</h1>
        <p class="mb-3 fs-5">本專案使用免費版 Render 網路雲端服務，第一次喚醒時間最久需 30 秒，測試時請稍等片刻。</p>
        <div class="main">
          <HeaderView></HeaderView>
          <ContentView></ContentView>
        </div>
      </div>
      <div class="col-md"></div>
    </div>
  </div>
</template>

<script>
import HeaderView from "./views/HeaderView.vue";
import ContentView from "./views/ContentView.vue";

export default {
  components: {
    HeaderView,
    ContentView,
  },
};
</script>
