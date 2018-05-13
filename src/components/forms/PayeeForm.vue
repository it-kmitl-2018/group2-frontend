<template>
  <div>
    <!--Payee-->
    <h2>ผู้รับชำระเงิน</h2>
    <b-form>
       <party-form :party="payee.party"></party-form>
      <tax-form :tax="payee.tax"></tax-form>
      <contact-form :contact="payee.contact"></contact-form>
      <address-form :address="payee.address"></address-form>
    </b-form>
  </div>
</template>

<script>
import PartyForm from './party/Party';
import TaxForm from './party/Tax';
import ContactForm from './party/Contact';
import AddressForm from './party/Address';

export default {
  props: ['payee'],
  components: {
    PartyForm,
    TaxForm,
    ContactForm,
    AddressForm,
  },
};
</script>
