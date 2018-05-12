<template>
  <div>
    <b-form-group label="รหัสไปรษณีย์: ">
        <b-form-input name="address.postalCode"
                      type="text"
                      v-model="address.postalCode"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ชื่ออาคาร: ">
        <b-form-input name="address.building"
                      type="text"
                      v-model="address.building"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ที่อยู่บรรทัดที่ 1: ">
      <b-form-input name="address.addressLineOne"
                    type="text"
                    v-model="address.addressLineOne"
                    required/>
      </b-form-group>
      <b-form-group label="ที่อยู่บรรทัดที่ 2: ">
        <b-form-input name="address.addressLineTwo"
                      type="text"
                      v-model="address.addressLineTwo"
                      required/>
      </b-form-group>
      <b-form-group label="ซอย: ">
        <b-form-input name="address.addressLineThree"
                      type="text"
                      v-model="address.addressLineThree"
                      required/>
      </b-form-group>
      <b-form-group label="หมู่บ้าน: ">
        <b-form-input name="address.addressLineFour"
                      type="text"
                      v-model="address.addressLineFour"
                      required/>
      </b-form-group>
      <b-form-group label="หมู่ที่: ">
        <b-form-input name="address.addressLineFive"
                      type="text"
                      v-model="address.addressLineFive"
                      required/>
      </b-form-group>
      <b-form-group label="ถนน: ">
        <b-form-input name="address.street"
                      type="text"
                      v-model="address.street"
                      required/>
      </b-form-group>
      <b-form-group label="ชื่ออำเภอ: ">
        <b-form-input name="address.district"
                      type="text"
                      v-model="address.district"
                      required/>
      </b-form-group>
      <b-form-group label="ชื่อตำบล: ">
        <b-form-input name="address.subDistrict"
                      type="text"
                      v-model="address.subDistrict"
                      required/>
      </b-form-group>
      <b-form-group label="รหัสประเทศ: ">
        <b-form-input name="address.countryID"
                      type="text"
                      v-model="address.countryID"
                      required/>
      </b-form-group>
      <b-form-group label="รหัสจังหวัด: ">
        <b-form-input name="address.provinceID"
                      type="text"
                      v-model="address.provinceID"
                      required/>
      </b-form-group>
      <b-form-group label="บ้านเลขที่: ">
        <b-form-input name="address.buildingNumber"
                      type="text"
                      v-model="address.buildingNumber"
                      required/>
      </b-form-group>
  </div>
</template>
<script>
export default {
  props: ['address'],
};
</script>
