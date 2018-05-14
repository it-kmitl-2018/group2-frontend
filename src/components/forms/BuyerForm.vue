<template>
  <div>
    <h2>ผู้ซื้อ</h2>
    <b-form>
      <party-form :party="buyer.party"></party-form>
      <tax-form :tax="buyer.tax"></tax-form>
      <contact-form :contact="buyer.contact"></contact-form>
      <address-form :address="buyer.address"></address-form>
    </b-form>
  </div>
</template>

<script>
import PartyForm from './party/Party';
import TaxForm from './party/Tax';
import ContactForm from './party/Contact';
import AddressForm from './party/Address';

export default {
  props: ['buyer'],
  components: {
    PartyForm,
    TaxForm,
    ContactForm,
    AddressForm,
  },
};
</script>
