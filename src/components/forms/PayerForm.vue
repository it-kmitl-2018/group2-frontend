<template>
  <div>
    <!--payer-->
    <h2>ผู้รับชำระเงิน</h2>
    <b-form>
      <!--payer Trade Party-->
      <b-form-group label="รหัสผู้ค้า(ผู้ชำระเงิน) :">
        <b-form-input name="payerTradeParty.id"
                      type="email"
                      v-model="payer.party.id"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="รหัสผู้ค้าสากล(ผู้ชำระเงิน) :">
        <b-form-input name="payerTradeParty.globalID"
                      type="text"
                      v-model="payer.party.globalID"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ชื่อผู้ชำระเงิน :">
        <b-form-input name="payerTradeParty.name"
                      type="text"
                      v-model="payer.party.name"
                      required>
        </b-form-input>
      </b-form-group>
      <!--Specified Tax Registration-->
      <b-form-group label="เลขประจำตัวผู้เสียภาษีอากร : ">
        <b-form-input name="payerTradeParty.tax.id"
                      type="text"
                      v-model="payer.tax.id"
                      required>
        </b-form-input>
      </b-form-group>
      <!--Defined Trade Contact-->
      <b-form-group label="ชื่อผู้ติดต่อ: ">
        <b-form-input name="payerTradeParty.contact.personName"
                      type="text"
                      v-model="payer.contact.personName"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ชื่อแผนก: ">
        <b-form-input name="payerTradeParty.contact.departmentName"
                      type="text"
                      v-model="payer.contact.departmentName"
                      required>
        </b-form-input>
      </b-form-group>
      <!--E-mail URI Universal Communication-->
      <b-form-group label="อีเมล์: ">
        <b-form-input name="payerTradeParty.contact.email"
                      type="text"
                      v-model="payer.contact.email"
                      required>
        </b-form-input>
      </b-form-group>
      <!--Telephone Universal Communication -->
      <b-form-group label="เบอร์โทรศัพท์: ">
        <b-form-input name="payerTradeParty.contact.phoneNumber"
                      type="text"
                      v-model="payer.contact.phoneNumber"
                      required>
        </b-form-input>
      </b-form-group>
    <!--Postal Trade Address -->
      <b-form-group label="รหัสไปรษณีย์: ">
        <b-form-input name="payerTradeParty.address.postalCode"
                      type="text"
                      v-model="payer.address.postalCode"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ชื่ออาคาร: ">
        <b-form-input name="payerTradeParty.address.building"
                      type="text"
                      v-model="payer.address.building"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ที่อยู่บรรทัดที่ 1: ">
      <b-form-input name="payer.address.addressLineOne"
                    type="text"
                    v-model="payer.address.addressLineOne"
                    required/>
      </b-form-group>
      <b-form-group label="ที่อยู่บรรทัดที่ 2: ">
        <b-form-input name="payer.address.addressLineTwo"
                      type="text"
                      v-model="payer.address.addressLineTwo"
                      required/>
      </b-form-group>
      <b-form-group label="ซอย: ">
        <b-form-input name="payer.address.addressLineThree"
                      type="text"
                      v-model="payer.address.addressLineThree"
                      required/>
      </b-form-group>
      <b-form-group label="หมู่บ้าน: ">
        <b-form-input name="payer.address.addressLineFour"
                      type="text"
                      v-model="payer.address.addressLineFour"
                      required/>
      </b-form-group>
      <b-form-group label="หมู่ที่: ">
        <b-form-input name="payer.address.addressLineFive"
                      type="text"
                      v-model="payer.address.addressLineFive"
                      required/>
      </b-form-group>
      <b-form-group label="ถนน: ">
        <b-form-input name="payer.address.street"
                      type="text"
                      v-model="payer.address.street"
                      required/>
      </b-form-group>
      <b-form-group label="ชื่ออำเภอ: ">
        <b-form-input name="payer.address.district"
                      type="text"
                      v-model="payer.address.district"
                      required/>
      </b-form-group>
      <b-form-group label="ชื่อตำบล: ">
        <b-form-input name="payer.address.subDistrict"
                      type="text"
                      v-model="payer.address.subDistrict"
                      required/>
      </b-form-group>
      <b-form-group label="รหัสประเทศ: ">
        <b-form-input name="payer.address.countryID"
                      type="text"
                      v-model="payer.address.countryID"
                      required/>
      </b-form-group>
      <b-form-group label="รหัสจังหวัด: ">
        <b-form-input name="payer.address.provinceID"
                      type="text"
                      v-model="payer.address.provinceID"
                      required/>
      </b-form-group>
      <b-form-group label="บ้านเลขที่: ">
        <b-form-input name="payer.address.buildingNumber"
                      type="text"
                      v-model="payer.address.buildingNumber"
                      required/>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  props: ['payer'],
};
</script>
