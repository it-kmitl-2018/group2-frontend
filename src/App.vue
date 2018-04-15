<template>
  <div id="app">
    <router-link :to="{name: 'ETaxInvoiceForm'}"> ใบแจ้งหนี้ </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
