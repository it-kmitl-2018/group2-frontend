<template>
  <div>
    <h2>ผู้ขาย</h2>
    <!--Seller Trade Party-->
    รหัสผู้ค้า(ผู้ขาย) : <input type="text" maxlength="35" v-model="props.id"/><br>
    รหัสผู้ค้าสากล(ผู้ขาย) :<input type="text" maxlength="70" v-model="props.globalID"/><br>
    ชื่อผู้ขาย : <input type="text" maxlength="256" v-model="props.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input type="text" maxlength="35" v-model="props.taxID"/><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input type="text" maxlength="140" v-model="props.personName"/><br>
    ชื่อแผนก: <input type="text" maxlength="140" v-model="props.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input type="text" maxlength="256" v-model="props.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input type="text" maxlength="35" v-model="props.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input type="text" maxlength="16" v-model="props.postalCode"/><br>
    ชื่ออาคาร: <input type="text" maxlength="140" v-model="props.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input type="text" maxlength="256" v-model="props.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input type="text" maxlength="256" v-model="props.addressLineTwo"/><br>
    ซอย: <input type="text" maxlength="70" v-model="props.addressLineThree"/><br>
    หมู่บ้าน: <input type="text" maxlength="70" v-model="props.addressLineFour"/><br>
    หมู่ที่: <input type="text" maxlength="70" v-model="props.addressLineFive"/><br>
    ถนน: <input type="text" maxlength="70" v-model="props.street"/><br>
    ชื่ออำเภอ: <input type="text" maxlength="70" v-model="props.district"/><br>
    ชื่อตำบล: <input type="text" maxlength="70" v-model="props.subDistrict"/><br>
    รหัสประเทศ: <input v-model="props.countryID"/><br>
    รหัสจังหวัด: <input type="text" maxlength="35" v-model="props.provinceID"/><br>
    บ้านเลขที่: <input type="text" maxlength="16" v-model="props.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['props'],
};
</script>
