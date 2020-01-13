<template>
  <b-form-input
    class="tcstring-input"
    v-model="tcstring"
    @click="selectContents"
    @input="$emit('decode', tcstring)"
  />
</template>

<script lang="ts">

import {TCString} from '@iabtcf/core';
import {Component, Prop} from 'vue-property-decorator';
import {FormComponent} from './FormComponent';

@Component
export default class extends FormComponent {

  private tcstring:string = '';

  @Prop()
  private encodedTCString: string

  private mount() {

    this.tcstring = this.encodedTCString;

  }


  private selectContents(e: MouseEvent): void {

    if (e && e.target && e.target) {

      (e.target as HTMLInputElement).select();

    }

  }
  
}

</script>
