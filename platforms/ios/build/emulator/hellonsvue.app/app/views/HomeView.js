import JobsList from '../components/JobsList'

export default {
  template: `
  <Page class="page">
    <ActionBar class="action-bar" title="Jobs"/>
    <StackLayout>
      <SearchBar hint="Search..." :text="query" @textChange="onTextChanged" @submit="onSubmit" />
      <jobs-list></jobs-list>
    </StackLayout>
  </Page>
  `,
  components: {
    JobsList
  },
  data () {
    return {
      query: ''
    }
  },
  computed: {
    jobCount () {
      return this.$store.state.jobs.length
    }
  }
}
