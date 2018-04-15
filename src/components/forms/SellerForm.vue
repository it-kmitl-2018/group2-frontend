<template>
  <div>
    <h2>ผู้ขาย</h2>
    <!--Seller Trade Party-->
    รหัสผู้ค้า(ผู้ขาย) : <input type="text" maxlength="35" v-model="seller.id"/><br>
    รหัสผู้ค้าสากล(ผู้ขาย) :<input type="text" maxlength="70" v-model="seller.globalID"/><br>
    ชื่อผู้ขาย : <input type="text" maxlength="256" v-model="seller.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input type="text" maxlength="35" v-model="seller.taxID"/><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input type="text" maxlength="140" v-model="seller.personName"/><br>
    ชื่อแผนก: <input type="text" maxlength="140" v-model="seller.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input type="text" maxlength="256" v-model="seller.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input type="text" maxlength="35" v-model="seller.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input type="text" maxlength="16" v-model="seller.postalCode"/><br>
    ชื่ออาคาร: <input type="text" maxlength="140" v-model="seller.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input type="text" maxlength="256" v-model="seller.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input type="text" maxlength="256" v-model="seller.addressLineTwo"/><br>
    ซอย: <input type="text" maxlength="70" v-model="seller.addressLineThree"/><br>
    หมู่บ้าน: <input type="text" maxlength="70" v-model="seller.addressLineFour"/><br>
    หมู่ที่: <input type="text" maxlength="70" v-model="seller.addressLineFive"/><br>
    ถนน: <input type="text" maxlength="70" v-model="seller.street"/><br>
    ชื่ออำเภอ: <input type="text" maxlength="70" v-model="seller.district"/><br>
    ชื่อตำบล: <input type="text" maxlength="70" v-model="seller.subDistrict"/><br>
    รหัสประเทศ: <input v-model="seller.countryID"/><br>
    รหัสจังหวัด: <input type="text" maxlength="35" v-model="seller.provinceID"/><br>
    บ้านเลขที่: <input type="text" maxlength="16" v-model="seller.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['seller'],
};
</script>
