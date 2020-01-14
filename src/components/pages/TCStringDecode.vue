<template>
  <div>
  <template>
    <form>

      <b-row>
        <b-col cols="8">
          <b-card
            bg-variant="light"
            class="b-card">
            <decode-input
              v-bind:encodedTCString="eTCString"
              @decode="decode"
            />
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="8">
          <b-card
            bg-variant="light"
            class="b-card">
            <decode-output
              :tcModel="tcModel"
              @update="update"
            />
          </b-card>
        </b-col>
      </b-row>

    </form>
  </template>
  </div>
</template>

<script lang="ts" src='./TCStringDecode.ts'></script>
