<template>
  <div>
    <h2>ผู้ออกเอกสาร</h2>
    <b-form>
      <party-form :party="invoicer.party"></party-form>
      <tax-form :tax="invoicer.tax"></tax-form>
      <contact-form :contact="invoicer.contact"></contact-form>
      <address-form :address="invoicer.address"></address-form>
    </b-form>
  </div>
</template>

<script>
import PartyForm from './party/Party';
import TaxForm from './party/Tax';
import ContactForm from './party/Contact';
import AddressForm from './party/Address';

export default {
  props: ['invoicer'],
  components: {
    PartyForm,
    TaxForm,
    ContactForm,
    AddressForm,
  },
};
</script>
