import JobsList from '../components/JobsList'
import FavoritesList from '../components/FavoritesList'

export default {
  template: `
  <Page class="page">
    <ActionBar background="#222" color="#fff" title="Home" />
    <TabView tabBackgroundColor="#222" :selectedIndex="selectedIndex">
      <TabViewItem title="Jobs">
        <jobs-list />
      </TabViewItem>
      <TabViewItem title="Favorite Jobs">
        <favorites-list />
      </TabViewItem>
    </TabView>
  </Page>
  `,
  components: { 
    JobsList,
    FavoritesList
  },
  data () {
    return {
      selectedIndex: 0
    }
  }
}
