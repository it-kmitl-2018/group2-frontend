import Vue from 'vue';
import Router from 'vue-router';
import ETaxInvoiceForm from '@/components/ETaxInvoiceForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
    },
    {
      path: '/ETaxInvoiceForm',
      name: 'ETaxInvoiceForm',
      component: ETaxInvoiceForm,
    },
  ],
});
