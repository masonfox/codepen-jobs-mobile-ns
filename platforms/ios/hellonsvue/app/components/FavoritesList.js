import JobList from './JobsList'

export default {
  template: `
    <StackLayout>
      <job-list :favorites="true" />
    </StackLayout>
  `,
  components: { JobList }
}
