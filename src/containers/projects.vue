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
      axios.get('/secured/projects').then((response) => {
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
