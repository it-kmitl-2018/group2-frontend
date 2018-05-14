<template>
  <div>
    <b-form-group label="เลขประจำตัวผู้เสียภาษีอากร : ">
        <b-form-input name="tax.id"
                      type="text"
                      v-model="tax.id"
                      required>
        </b-form-input>
      </b-form-group>
  </div>
</template>

<script>
export default {
  props: ['tax'],
};
</script>
