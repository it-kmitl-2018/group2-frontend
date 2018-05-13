<template>
  <div>
    <h2>ผู้รับเอกสาร</h2>
    <b-form>
      <party-form :party="invoicee.party"></party-form>
      <tax-form :tax="invoicee.tax"></tax-form>
      <contact-form :contact="invoicee.contact"></contact-form>
      <address-form :address="invoicee.address"></address-form>
    </b-form>
  </div>
</template>

<script>
import PartyForm from './party/Party';
import TaxForm from './party/Tax';
import ContactForm from './party/Contact';
import AddressForm from './party/Address';

export default {
  props: ['invoicee'],
  components: {
    PartyForm,
    TaxForm,
    ContactForm,
    AddressForm,
  },
};
</script>
