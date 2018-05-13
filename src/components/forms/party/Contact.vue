<template>
  <div>
    <!--Defined Trade Contact-->
    <b-form-group label="ชื่อผู้ติดต่อ: ">
      <b-form-input name="contact.personName"
                    type="text"
                    v-model="contact.personName"
                    required>
      </b-form-input>
    </b-form-group>
    <b-form-group label="ชื่อแผนก: ">
      <b-form-input name="contact.departmentName"
                    type="text"
                    v-model="contact.departmentName"
                    required>
      </b-form-input>
    </b-form-group>
    <!--E-mail URI Universal Communication-->
    <b-form-group label="อีเมล์: ">
      <b-form-input name="contact.email"
                    type="text"
                    v-model="contact.email"
                    required>
      </b-form-input>
    </b-form-group>
    <!--Telephone Universal Communication -->
    <b-form-group label="เบอร์โทรศัพท์: ">
      <b-form-input name="contact.phoneNumber"
                    type="text"
                    v-model="contact.phoneNumber"
                    required>
      </b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: ['contact'],
};
</script>
