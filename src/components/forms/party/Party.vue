<template>
  <div>
    <b-form-group label="รหัสผู้ค้า(ผู้ชำระเงิน) :">
        <b-form-input name="id"
                      type="email"
                      v-model="party.id"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="รหัสผู้ค้าสากล(ผู้ชำระเงิน) :">
        <b-form-input name="globalID"
                      type="text"
                      v-model="party.globalID"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ชื่อผู้ชำระเงิน :">
        <b-form-input name="name"
                      type="text"
                      v-model="party.name"
                      required>
        </b-form-input>
      </b-form-group>
  </div>
</template>

<script>
export default {
  props: ['party'],
};
</script>

<style>

</style>
