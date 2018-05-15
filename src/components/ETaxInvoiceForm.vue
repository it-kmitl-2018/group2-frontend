<template>
  <div class="ETaxInvoiceForm">
    <b-container>
      <b-card title="ใบกำกับภาษีอิเล็กทรอนิกส์">
        <hr>
        <b-row>
          <b-col><seller-form :seller="seller"></seller-form></b-col>
          <b-col><payee-form :payee="payee"></payee-form></b-col>
          <b-col><payer-form :payer="payer"></payer-form></b-col>
        </b-row>
        <b-row>
          <b-col><invoicer-form :invoicer="invoicer"></invoicer-form></b-col>
          <b-col><buyer-form :buyer="buyer"></buyer-form></b-col>
        </b-row>
      </b-card>
      <router-link :to="{name: 'ETaxInvoiceConfirm'}">
        <b-button variant="success">Submit</b-button>
      </router-link>
    </b-container>
  </div>
</template>

<script>
import SellerForm from '@/components/forms/SellerForm';
import SellerData from '@/data/Seller.data';
import PayeeForm from '@/components/forms/PayeeForm';
import PayeeData from '@/data/Payee.data';
import PayerForm from '@/components/forms/PayerForm';
import PayerData from '@/data/Payer.data';
import InvoicerForm from '@/components/forms/InvoicerForm';
import InvoicerData from '@/data/Invoicer.data';
import BuyerForm from '@/components/forms/BuyerForm';
import BuyerData from '@/data/Buyer.data';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

export default {
  data() {
    return {
      seller: SellerData.data,
      payee: PayeeData.data,
      payer: PayerData.data,
      invoicer: InvoicerData.data,
      buyer: BuyerData.data,
    };
  },
  components: {
    SellerForm,
    PayeeForm,
    PayerForm,
    InvoicerForm,
    BuyerForm,
  },
};
</script>
<style scoped>
.ETaxInvoiceForm {
  margin-bottom: 3em;
}
</style>

