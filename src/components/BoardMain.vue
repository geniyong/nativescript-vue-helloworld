<template>
  <Page>
  	<ActionBar class="action-bar" title="BoardMainPAge"/>
	<GridLayout rows="*,60">
		<ScrollView row="0">
	        <WrapLayout orientation="horizontal">
	                <Label
	                    row="1"
	                    text="BoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAge"
	                    horizontalAlignment="center"
	                    verticalAlignment="bottom"
	                    backgroundColor="rgb(81,197,247, 0.8)"
	                    width="100%"
	                    height="300"
	                    padding="10"
	                    fontSize="13"
	                    color="white"
	                ></Label>
	                <Label
	                    row="1"
	                    text="BoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAge"
	                    horizontalAlignment="center"
	                    verticalAlignment="bottom"
	                    backgroundColor="rgb(81,197,247, 0.8)"
	                    width="100%"
	                    height="300"
	                    padding="10"
	                    fontSize="13"
	                    color="white"
	                ></Label>
	                <Label
	                    row="1"
	                    text="BoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAge"
	                    horizontalAlignment="center"
	                    verticalAlignment="bottom"
	                    backgroundColor="rgb(81,197,247, 0.8)"
	                    width="100%"
	                    height="300"
	                    padding="10"
	                    fontSize="13"
	                    color="white"
	                ></Label>
	                <Label
	                    row="1"
	                    text="BoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAge"
	                    horizontalAlignment="center"
	                    verticalAlignment="bottom"
	                    backgroundColor="rgb(81,197,247, 0.8)"
	                    width="100%"
	                    height="300"
	                    padding="10"
	                    fontSize="13"
	                    color="white"
	                ></Label>
	                <Label
	                    row="1"
	                    text="BoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAge"
	                    horizontalAlignment="center"
	                    verticalAlignment="bottom"
	                    backgroundColor="rgb(81,197,247, 0.8)"
	                    width="100%"
	                    height="300"
	                    padding="10"
	                    fontSize="13"
	                    color="white"
	                ></Label>
	                <Label
	                    row="1"
	                    text="BoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAge"
	                    horizontalAlignment="center"
	                    verticalAlignment="bottom"
	                    backgroundColor="rgb(81,197,247, 0.8)"
	                    width="100%"
	                    height="300"
	                    padding="10"
	                    fontSize="13"
	                    color="white"
	                ></Label>
	                <Label
	                    row="1"
	                    text="BoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAgeBoardMainPAge"
	                    horizontalAlignment="center"
	                    verticalAlignment="bottom"
	                    backgroundColor="rgb(81,197,247, 0.8)"
	                    width="100%"
	                    height="300"
	                    padding="10"
	                    fontSize="13"
	                    color="white"
	                ></Label>
	        </WrapLayout>
		</ScrollView>
		

		<StackLayout row="1" orientation="horizontal">
	        <Button textWrap="true" width="25%" textAlignment="text">
	            <FormattedString>
	                <Span text="Home"></Span>
	            </FormattedString>
	        </Button>
	        <Button textWrap="true" width="25%" textAlignment="text">
	            <FormattedString>
	                <Span text="All Cocktails"></Span>
	            </FormattedString>
	        </Button>
	        <Button textWrap="true" width="25%" textAlignment="text">
	            <FormattedString>
	                <Span text="Favorite"></Span>
	            </FormattedString>
	        </Button>
	        <Button textWrap="true" width="25%" textAlignment="text">
	            <FormattedString>
	                <Span text="Profile"></Span>
	            </FormattedString>
	        </Button>
    	</StackLayout> 
	</GridLayout>
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
