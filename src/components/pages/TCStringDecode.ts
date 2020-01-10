import DecodeInput from '../forms/DecodeInput.vue';
import DecodeOutput from '../forms/DecodeOutput.vue';

import {Component, Vue} from 'vue-property-decorator';
import {TCModel, GVL, TCString, Vendor, Purpose, Feature} from '@iabtcf/core';
import Json from '@iabtcf/core';

GVL.baseUrl = document.location.origin;

@Component({
  components: {
    'decode-input': DecodeInput,
    'decode-output': DecodeOutput,

  },
})
export default class extends Vue {

  private tcModel: TCModel = new TCModel();
  private encodedTCString: string = '';

  private decode(consentString) : void {
    let decodedString: object;
    try {

      this.tcModel = TCString.decode(consentString);
      console.log('got the tcstring', this.tcModel);


    } catch(error) {
      console.error("didn't work");
    }
  }
  private created(): void {
    this.tcModel.gvl = new GVL();
  }

}
