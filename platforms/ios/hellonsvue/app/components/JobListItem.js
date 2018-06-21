import _ from 'lodash'

export default {
  template: `
    <StackLayout class="item" :class="{ 'featured' : job.featured }">
      <Label class="job-title" :text="job.title" />
      <Label textWrap="true">{{ job.term }}, {{ job.company_name }}, {{ jobLocation }}</Label>
      <Label class="job-featured-block" textWrap="true" :text="job.featured_text" v-if="job.featured" />
    </StackLayout>
  `,
  props: {
    job: {
      type: Object,
      required: true
    },
  },
  computed: {
    jobLocation () {
      if (this.job.remote) {
        return 'Remote'
      } else {
        let address = `${this.job.address.city}, `
        if (this.job.address.state_prov) {
          return address += this.job.address.state_prov
        } else {
          return address += this.job.address.country
        }
      }
    }
  }
}
