<template>
  <div>
    <p @click="loadContent()">{{ defaultText }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    defaultText() {
      return browser.i18n.getMessage('extName')
    }
  },
  methods: {
    loadContent() {
      browser.runtime.sendMessage({})
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
