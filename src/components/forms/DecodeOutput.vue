<template>
  <div
    class="tcstring-input"
    v-model="tcstringDecoded"
    > 
    <pre>{{ tcstringDecoded }}</pre>
  </div>
</template>

<script lang="ts">

import {TCString} from '@iabtcf/core';
import {Component, Prop} from 'vue-property-decorator';
import {FormComponent} from './FormComponent';

@Component
export default class extends FormComponent {

  private tcstringDecoded_: string;

  private get tcstringDecoded(): string {

    return JSON.stringify(this.tcModel, null, 4)

  }

}

</script>
