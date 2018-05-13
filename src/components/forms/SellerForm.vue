<template>
  <div>
    <h2>ผู้ขาย</h2>
    <b-form>
      <party-form :party="seller.party"></party-form>
      <tax-form :tax="seller.tax"></tax-form>
      <contact-form :contact="seller.contact"></contact-form>
      <address-form :address="seller.address"></address-form>
    </b-form>
  </div>
</template>

<script>
import PartyForm from './party/Party';
import TaxForm from './party/Tax';
import ContactForm from './party/Contact';
import AddressForm from './party/Address';

export default {
  props: ['seller'],
  components: {
    PartyForm,
    TaxForm,
    ContactForm,
    AddressForm,
  },
};
</script>
