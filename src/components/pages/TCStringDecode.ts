import DecodeInput from '../forms/DecodeInput.vue';
import DecodeOutput from '../forms/DecodeOutput.vue';

import {Component, Vue} from 'vue-property-decorator';
import {TCModel, GVL, TCString} from '@iabtcf/core';
import Json from '@iabtcf/core';

GVL.baseUrl = document.location.origin;

@Component({
  components: {
    'decode-input': DecodeInput,
    'decode-output': DecodeOutput,

  },
})
export default class extends Vue {

  private tcModel: TCModel;
  private eTCString: string;

  public constructor() {

    super();

    if(~document.location.hash.indexOf('tcstring=')) {

      this.decode(document.location.hash.split('tcstring=')[1]);

    } else {
      this.tcModel = new TCModel();
    }

  }

  private decode(tcstring: string) : void {
    let decodedString: object;
    try {

      this.eTCString = tcstring;
      this.tcModel = TCString.decode(tcstring);
      console.log('got the tcstring', this.tcModel);


    } catch(error) {

      console.error("didn't work");
    }
  }
  private created(): void {
    this.tcModel.gvl = new GVL();
  }


}
