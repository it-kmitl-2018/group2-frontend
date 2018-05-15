<template>
  <div>
    <h2>ผู้ขาย</h2>
    <!--Seller Trade Party-->
    รหัสผู้ค้า(ผู้ขาย) : <span>{{ sellerConfirm.party.id }}</span><br>
    รหัสผู้ค้าสากล(ผู้ขาย) : <span>{{ sellerConfirm.party.globalID }}</span><br>
    ชื่อผู้ขาย : <span>{{ sellerConfirm.party.name }}</span><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <span>{{ sellerConfirm.tax.taxID }}</span><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <span>{{ sellerConfirm.contact.personName }}</span><br>
    ชื่อแผนก: <span>{{ sellerConfirm.contact.departmentName }}</span><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <span>{{ sellerConfirm.contact.email }}</span><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <span>{{ sellerConfirm.contact.phoneNumber }}</span><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <span>{{ sellerConfirm.address.postalCode }}</span><br>
    ชื่ออาคาร: <span>{{ sellerConfirm.address.building }}</span><br>
    ที่อยู่บรรทัดที่ 1: <span>{{ sellerConfirm.address.addressLineOne }}</span><br>
    ที่อยู่บรรทัดที่ 2: <span>{{ sellerConfirm.address.addressLineTwo }}</span><br>
    ซอย: <span>{{ sellerConfirm.address.addressLineThree }}</span><br>
    หมู่บ้าน: <span>{{ sellerConfirm.address.addressLineFour }}</span><br>
    หมู่ที่: <span>{{ sellerConfirm.address.addressLineFive }}</span><br>
    ถนน: <span>{{ sellerConfirm.address.street }}</span><br>
    ชื่ออำเภอ: <span>{{ sellerConfirm.address.district }}</span><br>
    ชื่อตำบล: <span>{{ sellerConfirm.address.subDistrict }}</span><br>
    รหัสประเทศ: <span>{{ sellerConfirm.address.countryID }}</span><br>
    รหัสจังหวัด: <span>{{ sellerConfirm.address.provinceID }}</span><br>
    บ้านเลขที่: <span>{{ sellerConfirm.address.buildingNumber }}</span><br>
  </div>
</template>

<script>
export default {
  props: ['sellerConfirm'],
};
</script>

<style>

</style>
