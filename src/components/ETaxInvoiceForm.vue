<template>
  <div class="ETaxInvoiceForm">
    <b-container>
      <b-card title="ใบกำกับภาษีอิเล็กทรอนิกส์">
        <hr>
        <b-row>
          <b-col><seller-form :seller="seller"></seller-form></b-col>
          <b-col><payee-form :payee="payee"></payee-form></b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import SellerForm from '@/components/forms/SellerForm';
import SellerData from '@/data/Seller.data';
import PayeeForm from '@/components/forms/PayeeForm';
import PayeeData from '@/data/Payee.data';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

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
<style scoped>
.ETaxInvoiceForm {
  margin-bottom: 3em;
}
</style>

