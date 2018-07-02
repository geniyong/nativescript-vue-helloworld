import Vue from 'nativescript-vue';
import HelloWorld from './components/HelloWorld';
import Logo from './components/Logo';
import './styles.scss';

const VueRouter = require('vue-router');


const Login = {
  template: `
    <Page>
      <ActionBar title="Login" />
      <StackLayout>
        <Button text="To BoardMain PAGE directly" @tap="$navigateTo(boardmainPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      boardmainPage: BoardMain
    }
  }
};

const BoardMain = {
  template: `
    <Page>
      <ActionBar title="Login" />
      <StackLayout>
        <Button text="To Details directly" @tap="$navigateTo(mainPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      mainPage: Main
    }
  }
};

const BoardFreedom = {
  template: `
    <Page>
      <ActionBar title="Login" />
      <StackLayout>
        <Button text="To Details directly" @tap="$navigateTo(mainPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      mainPage: Main
    }
  }
};

const BoardBest = {
  template: `
    <Page>
      <ActionBar title="Login" />
      <StackLayout>
        <Button text="To Details directly" @tap="$navigateTo(mainPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      mainPage: Main
    }
  }
};

const BoardWarning = {
  template: `
    <Page>
      <ActionBar title="Login" />
      <StackLayout>
        <Button text="To Details directly" @tap="$navigateTo(mainPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      mainPage: Main
    }
  }
};

const BoardLeakChk = {
  template: `
    <Page>
      <ActionBar title="Login" />
      <StackLayout>
        <Button text="To Details directly" @tap="$navigateTo(mainPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      mainPage: Main
    }
  }
};

const BoardQnA = {
  template: `
    <Page>
      <ActionBar title="Login" />
      <StackLayout>
        <Button text="To Details directly" @tap="$navigateTo(mainPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      mainPage: Main
    }
  }
};

const FootBar = {
  template: `
    <Page>
      <ActionBar title="Login" />
      <StackLayout>
        <Button text="To Details directly" @tap="$navigateTo(mainPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      mainPage: Main
    }
  }
};

const Main = {
  template: `
    <Page>
      <ActionBar title="Main"/>
      <StackLayout>
        <Label text="This is Main Page.." />
      </StackLayout>
    </Page>
  `
};

new Vue({
  render: h => h(Logo)
}).$start()