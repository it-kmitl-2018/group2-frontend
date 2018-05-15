<template>
  <div>
    <h2>ผู้ชำระเงิน</h2>
    <!--Payer Trade Party-->
    รหัสผู้ค้า(ผู้ชำระเงิน) : <span>{{ payerConfirm.party.id }}</span><br>
    รหัสผู้ค้าสากล(ผู้ชำระเงิน) : <span>{{ payerConfirm.party.globalID }}</span><br>
    ชื่อผู้ชำระเงิน : <span>{{ payerConfirm.party.name }}</span><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <span>{{ payerConfirm.tax.taxID }}</span><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <span>{{ payerConfirm.contact.personName }}</span><br>
    ชื่อแผนก: <span>{{ payerConfirm.contact.departmentName }}</span><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <span>{{ payerConfirm.contact.email }}</span><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <span>{{ payerConfirm.contact.phoneNumber }}</span><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <span>{{ payerConfirm.address.postalCode }}</span><br>
    ชื่ออาคาร: <span>{{ payerConfirm.address.building }}</span><br>
    ที่อยู่บรรทัดที่ 1: <span>{{ payerConfirm.address.addressLineOne }}</span><br>
    ที่อยู่บรรทัดที่ 2: <span>{{ payerConfirm.address.addressLineTwo }}</span><br>
    ซอย: <span>{{ payerConfirm.address.addressLineThree }}</span><br>
    หมู่บ้าน: <span>{{ payerConfirm.address.addressLineFour }}</span><br>
    หมู่ที่: <span>{{ payerConfirm.address.addressLineFive }}</span><br>
    ถนน: <span>{{ payerConfirm.address.street }}</span><br>
    ชื่ออำเภอ: <span>{{ payerConfirm.address.district }}</span><br>
    ชื่อตำบล: <span>{{ payerConfirm.address.subDistrict }}</span><br>
    รหัสประเทศ: <span>{{ payerConfirm.address.countryID }}</span><br>
    รหัสจังหวัด: <span>{{ payerConfirm.address.provinceID }}</span><br>
    บ้านเลขที่: <span>{{ payerConfirm.address.buildingNumber }}</span><br>
  </div>
</template>

<script>
export default {
  props: ['payerConfirm'],
};
</script>

<style>

</style>
