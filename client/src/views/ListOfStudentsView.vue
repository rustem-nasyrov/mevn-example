<template>
  <div class="row">
    <v-simple-table>
      <template v-slot:default>
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student._id">
            <td>{{ student.name }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.phone }}</td>
            <td>
              <router-link
                custom
                v-slot="{ navigate }"
                :to="{ name: 'edit', params: { id: student._id } }"
                class="btn btn-success"
              >
                <v-btn color="primary" @click="navigate">Edit</v-btn>
              </router-link>
              <v-btn color="error" @click.prevent="deleteStudent(student._id)">
                Delete
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IStudent } from "@/types";
import axios from "@/plugins/axios";

interface IListOfStudentsViewData {
  students: IStudent[];
}

export default Vue.extend({
  name: "ListOfStudentsView",

  data(): IListOfStudentsViewData {
    return {
      students: [],
    };
  },

  created() {
    axios
      .get("/")
      .then((res) => {
        this.students = res.data;
      })
      .catch((error: string) => {
        throw new Error(error);
      });
  },

  methods: {
    deleteStudent(studentId: number) {
      const indexOfArrayItem = this.students.findIndex(
        ({ id }) => id === studentId
      );

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(`/delete-student/${studentId}`)
          .then(() => {
            this.students.splice(indexOfArrayItem, 1);
          })
          .catch((error: string) => {
            throw new Error(error);
          });
      }
    },
  },
});
</script>

<style scoped>
.btn-success {
  margin-right: 10px;
}
</style>
