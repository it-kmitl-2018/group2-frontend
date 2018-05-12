<template>
  <div>
    <h2>ผู้รับชำระเงิน</h2>
    <b-form>
      <party-form :party="payer.party"></party-form>
      <tax-form :tax="payer.tax"></tax-form>
      <contact-form :contact="payer.contact"></contact-form>
      <address-form :address="payer.address"></address-form>
    </b-form>
  </div>
</template>

<script>
import PartyForm from './party/Party';
import TaxForm from './party/Tax';
import ContactForm from './party/Contact';
import AddressForm from './party/Address';

export default {
  props: ['payer'],
  components: {
    PartyForm,
    TaxForm,
    ContactForm,
    AddressForm,
  },
};
</script>
