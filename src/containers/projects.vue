<template lang="html">
  <div id="projects">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          List of fake projects, courtesy of mocky.io ...
        </div>
        <div class="">
          <table class="table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Assigned To</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in projects">
                <td>{{item.name}}</td>
                <td>{{item.assignedTo}}</td>
                <td>{{item.priority}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'projects',
  data: function () {
    return {
      projects: []
    }
  },
  methods: {
    loadProjects: function () {
      // mocky.io does not allow sending an authorization header, I created an instance and removed
      // the header for this call
      let mock = axios.create()
      delete mock.defaults.headers.common.Authorization
      mock.get('http://www.mocky.io/v2/585e03ce100000b82c501e8e').then((response) => {
        this.projects = response.data
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.loadProjects()
  }
}
</script>

<style lang="css">
</style>
