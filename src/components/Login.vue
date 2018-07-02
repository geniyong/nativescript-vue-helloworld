<template>
  <Page>
      <ActionBar title="LOGINPAGE" />
      <StackLayout>
        <Button text="To boardmainPAge directly" @tap="$navigateTo(boardmainPage)" />
      </StackLayout>
    </Page>
</template>

<script>
  import bm from './BoardMain';
  export default {
    data () {
      return {
      boardmainPage: bm
    };
    },
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
