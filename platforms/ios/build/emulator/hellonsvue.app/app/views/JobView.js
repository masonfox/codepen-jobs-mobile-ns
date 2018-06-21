// const md = require('markdown-it')();
import utilsModule from 'tns-core-modules/utils/utils'

export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  template: `
    <Page background="#222" class="page job-page">
      <ActionBar class="action-bar" background="#222" title="">
        <ActionItem @tap="favorite"
          ios.position="right"
        >
          <Image src="~/images/favorite.svg" stretch="none" />
        </ActionItem>
      </ActionBar>
      <ScrollView>
        <StackLayout>
          <StackLayout dock="top" padding="25 10" background="#111">
            <Button text="&#xf117; Shop" class="material-icon"/>
            <Label class="h1 job-title" :class="{ 'featured' : job.featured }" :text="job.title" textWrap="true" />
            <Label class="h2" color="#888" :text="'at ' + job.company_name" textWrap="true" />
          </StackLayout>
          <StackLayout color="white" padding="15 10">
            <Label textWrap="true" :text="job.description" v-if="job.description" />
            <!-- if they don't have a description -->
            <StackLayout v-else>
              <Label marginBottom="10" textAlignment="center" class="h3" textWrap="true" text="Shucks! We don't have that one on file!" />
              <Button class="btn-primary" @tap="handleRedirect" text="See website" />
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </Page>
  `,
  computed: {
    isFavorited () {
      // make a getter for this
      return false
    },
    shortAddress () {
      if (this.hasAddress) {
        let address = `${this.job.address.city}, `
        if (this.job.address.state_prov) {
          return address += this.job.address.state_prov
        } else {
          return address += this.job.address.country
        }
      }
    }
  },
  methods: {
    handleRedirect () {
      utilsModule.openUrl(this.job.url)
    },
    favorite () {
      this.$store.commit('favorite', this.job)
    },
    unfavorite () {
      this.$store.commit('unfavorite', this.job) 
    }
  },
  created () {
    console.log(this.job.description)
  }
}
