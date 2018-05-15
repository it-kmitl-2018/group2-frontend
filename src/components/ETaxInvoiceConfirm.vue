<template>
  <div class="ETaxInvoiceConfirm">
    <b-container>
      <b-card title="ยืนยันใบกำกับภาษีอิเล็กทรอนิกส์">
        <hr>
        <b-row>
          <b-col><seller-confirm-form :sellerConfirm="seller"></seller-confirm-form></b-col>
          <b-col><payer-confirm-form :payerConfirm="payer"></payer-confirm-form></b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import SellerConfirmForm from '@/components/forms/SellerConfirmForm';
import SellerData from '@/data/Seller.data';
import PayerConfirmForm from '@/components/forms/PayerConfirmForm';
import PayerData from '@/data/Payer.data';

export default {
  data() {
    return {
      seller: SellerData.data,
      payer: PayerData.data,
    };
  },
  components: {
    SellerConfirmForm,
    PayerConfirmForm,
  },
};
</script>

<style>

</style>
