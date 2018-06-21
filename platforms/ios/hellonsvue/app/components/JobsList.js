import JobView from '../views/JobView'
import JobListItem from './JobListItem'

export default {
  template: `
    <StackLayout>
      <SearchBar hint="Search..." v-model="query" @textChange="onTextChanged" @submit="onSubmit" />
      <Label text="0xe903" color="red" class="material-icon"/>
      <ScrollView>
        <ListView for="job in filteredJobs" class="job-list" @itemTap="onItemTap" separatorColor="black">
          <v-template>
            <job-list-item :favorites="favorites" :job="job" />
          </v-template>
        </ListView>
      </ScrollView>
    </StackLayout>
  `,
  props: {
    favorites: {
      type: Boolean,
      default: false
    }
  },
  components: { JobListItem },
  data () {
    return {
      query: ''
    }
  },
  computed: {
    jobs () {
      if (this.favorites) {
        return this.$store.state.favorites
      } else {
        return this.$store.state.jobs
      }
    },
    filteredJobs () {
      return this.jobs.filter((job) => {
        return job.title.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },
  methods: {
    onTextChanged (event) {
      console.log(this.query)
    },
    onItemTap (event) {
      this.$navigateTo(JobView, { context: { propsData: { job: event.item }}});
    }
  }
}
