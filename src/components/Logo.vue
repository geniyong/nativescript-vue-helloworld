<template>
  <Page>
      <ActionBar title="Logo" />
      <StackLayout>
        <Button text="To LoginPage directly" @tap="$navigateTo(loginPage)" />
      </StackLayout>
    </Page>
</template>

<script>
  import Login from './Login';
  export default {
    data () {
      return {
      loginPage: Login
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
