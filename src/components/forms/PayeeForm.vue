<template>
  <div>
    <!--Payee-->
    <h2>ผู้รับชำระเงิน</h2>
    <!--Payee Trade Party-->
    รหัสผู้ค้า(ผู้รับชำระเงิน) : <input v-model="payee.id"/><br>
    รหัสผู้ค้าสากล(ผู้รับชำระเงิน) : <input v-model="payee.globalID"/><br>
    ชื่อผู้ขาย : <input v-model="payee.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input v-model="payee.taxID"/><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input v-model="payee.personName"/><br>
    ชื่อแผนก: <input v-model="payee.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input v-model="payee.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input v-model="payee.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input v-model="payee.postalCode"/><br>
    ชื่ออาคาร: <input v-model="payee.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="payee.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="payee.addressLineTwo"/><br>
    ซอย: <input v-model="payee.addressLineThree"/><br>
    หมู่บ้าน: <input v-model="payee.addressLineFour"/><br>
    หมู่ที่: <input v-model="payee.addressLineFive"/><br>
    ถนน: <input v-model="payee.street"/><br>
    ชื่ออำเภอ: <input v-model="payee.district"/><br>
    ชื่อตำบล: <input v-model="payee.subDistrict"/><br>
    รหัสประเทศ: <input v-model="payee.countryID"/><br>
    รหัสจังหวัด: <input v-model="payee.provinceID"/><br>
    บ้านเลขที่: <input v-model="payee.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['payee'],
};
</script>
