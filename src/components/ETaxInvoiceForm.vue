<template>
  <div class="ETaxInvoiceForm">
    <br>
      <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
      <seller-form :seller="seller"></seller-form>
  </div>
</template>

<script>
import SellerForm from '@/components/forms/SellerForm';
import SellerData from '@/data/Seller.data';

export default {
  data() {
    return {
      seller: SellerData.data,
    };
  },
  components: {
    SellerForm,
  },
};
</script>
