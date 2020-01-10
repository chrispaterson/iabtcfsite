<template>
  <b-form-input
    class="tcstring-input"
    v-model="consentString"
    @click="selectContents"
    @input="$emit('decode', consentString)"
  />
</template>

<script lang="ts">

import {TCString} from '@iabtcf/core';
import {Component, Prop} from 'vue-property-decorator';
import {FormComponent} from './FormComponent';

@Component
export default class extends FormComponent {

  private selectContents(e: MouseEvent): void {

    if (e && e.target && e.target) {

      (e.target as HTMLInputElement).select();

    }

  }
  
  private decodeNewString(): void {

    this.$emit("decode");

  }

}

</script>
