<template>
  <div>
    <h2>ผู้ซื้อ</h2>
    <!--Buyer Trade Party-->
    รหัสผู้ค้า(ผู้ซื้อ) : <span>{{ buyerConfirm.party.id }}</span><br>
    รหัสผู้ค้าสากล(ผู้ซื้อ) : <span>{{ buyerConfirm.party.globalID }}</span><br>
    ชื่อผู้ซื้อ : <span>{{ buyerConfirm.party.name }}</span><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <span>{{ buyerConfirm.tax.taxID }}</span><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <span>{{ buyerConfirm.contact.personName }}</span><br>
    ชื่อแผนก: <span>{{ buyerConfirm.contact.departmentName }}</span><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <span>{{ buyerConfirm.contact.email }}</span><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <span>{{ buyerConfirm.contact.phoneNumber }}</span><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <span>{{ buyerConfirm.address.postalCode }}</span><br>
    ชื่ออาคาร: <span>{{ buyerConfirm.address.building }}</span><br>
    ที่อยู่บรรทัดที่ 1: <span>{{ buyerConfirm.address.addressLineOne }}</span><br>
    ที่อยู่บรรทัดที่ 2: <span>{{ buyerConfirm.address.addressLineTwo }}</span><br>
    ซอย: <span>{{ buyerConfirm.address.addressLineThree }}</span><br>
    หมู่บ้าน: <span>{{ buyerConfirm.address.addressLineFour }}</span><br>
    หมู่ที่: <span>{{ buyerConfirm.address.addressLineFive }}</span><br>
    ถนน: <span>{{ buyerConfirm.address.street }}</span><br>
    ชื่ออำเภอ: <span>{{ buyerConfirm.address.district }}</span><br>
    ชื่อตำบล: <span>{{ buyerConfirm.address.subDistrict }}</span><br>
    รหัสประเทศ: <span>{{ buyerConfirm.address.countryID }}</span><br>
    รหัสจังหวัด: <span>{{ buyerConfirm.address.provinceID }}</span><br>
    บ้านเลขที่: <span>{{ buyerConfirm.address.buildingNumber }}</span><br>
  </div>
</template>

<script>
export default {
  props: ['buyerConfirm'],
};
</script>

<style>

</style>
