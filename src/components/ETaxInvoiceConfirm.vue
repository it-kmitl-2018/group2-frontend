<template>
  <div class="ETaxInvoiceConfirm">
    <b-container>
      <b-card title="ยืนยันใบกำกับภาษีอิเล็กทรอนิกส์">
        <hr>
        <b-row>
          <b-col><seller-confirm-form :sellerConfirm="seller"></seller-confirm-form></b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import SellerConfirmForm from '@/components/forms/SellerConfirmForm';
import SellerData from '@/data/Seller.data';
export default {
  data() {
    return {
      seller: SellerData.data,
    };
  },
  components: {
    SellerConfirmForm,
  },
}
</script>

<style>

</style>
