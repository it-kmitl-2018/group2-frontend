<template>
  <div class="ETaxInvoiceForm">
    <br>
      <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
      <seller-form :seller="seller"></seller-form>
      <payee-form :payee="payee"></payee-form>
  </div>
</template>

<script>
import SellerForm from '@/components/forms/SellerForm';
import SellerData from '@/data/Seller.data';
import PayeeForm from '@/components/forms/PayeeForm';
import PayeeData from '@/data/Payee.data';

export default {
  data() {
    return {
      seller: SellerData.data,
      payee: PayeeData.data,
    };
  },
  components: {
    SellerForm,
    PayeeForm,
  },
};
</script>
