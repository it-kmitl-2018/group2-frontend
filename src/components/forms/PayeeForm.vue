<template>
  <div>
    <!--Payee-->
    <h2>ผู้รับชำระเงิน</h2>
    <b-form>
      <!--Payee Trade Party-->
      <b-form-group label="รหัสผู้ค้า(ผู้รับชำระเงิน) :">
        <b-form-input name="payeeTradeParty.id"
                      type="email"
                      v-model="payee.party.id"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="รหัสผู้ค้าสากล(ผู้รับชำระเงิน) :">
        <b-form-input name="payeeTradeParty.globalID"
                      type="text"
                      v-model="payee.party.globalID"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ชื่อผู้ขาย :">
        <b-form-input name="payeeTradeParty.name"
                      type="text"
                      v-model="payee.party.name"
                      required>
        </b-form-input>
      </b-form-group>
      <!--Specified Tax Registration-->
      <b-form-group label="เลขประจำตัวผู้เสียภาษีอากร : ">
        <b-form-input name="payeeTradeParty.tax.id"
                      type="text"
                      v-model="payee.tax.id"
                      required>
        </b-form-input>
      </b-form-group>
      <!--Defined Trade Contact-->
      <b-form-group label="ชื่อผู้ติดต่อ: ">
        <b-form-input name="payeeTradeParty.contact.personName"
                      type="text"
                      v-model="payee.contact.personName"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ชื่อแผนก: ">
        <b-form-input name="payeeTradeParty.contact.departmentName"
                      type="text"
                      v-model="payee.contact.departmentName"
                      required>
        </b-form-input>
      </b-form-group>
      <!--E-mail URI Universal Communication-->
      <b-form-group label="อีเมล์: ">
        <b-form-input name="payeeTradeParty.contact.email"
                      type="text"
                      v-model="payee.contact.email"
                      required>
        </b-form-input>
      </b-form-group>
      <!--Telephone Universal Communication -->
      <b-form-group label="เบอร์โทรศัพท์: ">
        <b-form-input name="payeeTradeParty.contact.phoneNumber"
                      type="text"
                      v-model="payee.contact.phoneNumber"
                      required>
        </b-form-input>
      </b-form-group>
    <!--Postal Trade Address -->
      <b-form-group label="รหัสไปรษณีย์: ">
        <b-form-input name="payeeTradeParty.address.postalCode"
                      type="text"
                      v-model="payee.address.postalCode"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ชื่ออาคาร: ">
        <b-form-input name="payeeTradeParty.address.building"
                      type="text"
                      v-model="payee.address.building"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group label="ที่อยู่บรรทัดที่ 1: ">
      <b-form-input name="payee.address.addressLineOne"
                    type="text"
                    v-model="payee.address.addressLineOne"
                    required/>
      </b-form-group>
      <b-form-group label="ที่อยู่บรรทัดที่ 2: ">
        <b-form-input name="payee.address.addressLineTwo"
                      type="text"
                      v-model="payee.address.addressLineTwo"
                      required/>
      </b-form-group>
      <b-form-group label="ซอย: ">
        <b-form-input name="payee.address.addressLineThree"
                      type="text"
                      v-model="payee.address.addressLineThree"
                      required/>
      </b-form-group>
      <b-form-group label="หมู่บ้าน: ">
        <b-form-input name="payee.address.addressLineFour"
                      type="text"
                      v-model="payee.address.addressLineFour"
                      required/>
      </b-form-group>
      <b-form-group label="หมู่ที่: ">
        <b-form-input name="payee.address.addressLineFive"
                      type="text"
                      v-model="payee.address.addressLineFive"
                      required/>
      </b-form-group>
      <b-form-group label="ถนน: ">
        <b-form-input name="payee.address.street"
                      type="text"
                      v-model="payee.address.street"
                      required/>
      </b-form-group>
      <b-form-group label="ชื่ออำเภอ: ">
        <b-form-input name="payee.address.district"
                      type="text"
                      v-model="payee.address.district"
                      required/>
      </b-form-group>
      <b-form-group label="ชื่อตำบล: ">
        <b-form-input name="payee.address.subDistrict"
                      type="text"
                      v-model="payee.address.subDistrict"
                      required/>
      </b-form-group>
      <b-form-group label="รหัสประเทศ: ">
        <b-form-input name="payee.address.countryID"
                      type="text"
                      v-model="payee.address.countryID"
                      required/>
      </b-form-group>
      <b-form-group label="รหัสจังหวัด: ">
        <b-form-input name="payee.address.provinceID"
                      type="text"
                      v-model="payee.address.provinceID"
                      required/>
      </b-form-group>
      <b-form-group label="บ้านเลขที่: ">
        <b-form-input name="payee.address.buildingNumber"
                      type="text"
                      v-model="payee.address.buildingNumber"
                      required/>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  props: ['payee'],
};
</script>
