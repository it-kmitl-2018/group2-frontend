<template>
  <div>
    <h2>ผู้ขาย</h2>
    <!--Seller Trade Party-->
    รหัสผู้ค้า(ผู้ขาย) : <input type="text" maxlength="35" v-model="sellerFormProps.id"/><br>
    รหัสผู้ค้าสากล(ผู้ขาย) : <input type="text" maxlength="70" v-model="sellerFormProps.globalID"/><br>
    ชื่อผู้ขาย : <input type="text" maxlength="256" v-model="sellerFormProps.name"/><br>

    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input type="text" maxlength="35" v-model="sellerFormProps.taxID"/><br>

    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input type="text" maxlength="140" v-model="sellerFormProps.personName"/><br>
    ชื่อแผนก: <input type="text" maxlength="140" v-model="sellerFormProps.departmentName"/><br>
    
    <!--E-mail URI Universal Communication-->
    อีเมล: <input type="text" maxlength="256" v-model="sellerFormProps.email"/><br>
    
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input type="text" maxlength="35" v-model="sellerFormProps.phoneNumber"/><br>
    
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input type="text" maxlength="16" v-model="sellerFormProps.postalCode"/><br>
    ชื่ออาคาร: <input type="text" maxlength="140" v-model="sellerFormProps.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input type="text" maxlength="256" v-model="sellerFormProps.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input type="text" maxlength="256" v-model="sellerFormProps.addressLineTwo"/><br>
    ซอย: <input type="text" maxlength="70" v-model="sellerFormProps.addressLineThree"/><br>
    หมู่บ้าน: <input type="text" maxlength="70" v-model="sellerFormProps.addressLineFour"/><br>
    หมู่ที่: <input type="text" maxlength="70" v-model="sellerFormProps.addressLineFive"/><br>
    ถนน: <input type="text" maxlength="70" v-model="sellerFormProps.street"/><br>
    ชื่ออำเภอ: <input type="text" maxlength="70" v-model="sellerFormProps.district"/><br>
    ชื่อตำบล: <input type="text" maxlength="70" v-model="sellerFormProps.subDistrict"/><br>
    รหัสประเทศ: <input v-model="sellerFormProps.countryID"/><br>
    รหัสจังหวัด: <input type="text" maxlength="35" v-model="sellerFormProps.provinceID"/><br>
    บ้านเลขที่: <input type="text" maxlength="16" v-model="sellerFormProps.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['sellerFormProps'],
};
</script>
