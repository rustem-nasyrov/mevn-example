<template>
  <div class="row justify-content-center">
    <v-form @submit.prevent="handleUpdateForm">
      <v-text-field v-model="student.name" label="Name" placeholder="John Doe">
      </v-text-field>
      <v-text-field
        v-model="student.email"
        label="Email"
        placeholder="john.doe@example.com"
      >
      </v-text-field>
      <v-text-field
        v-model="student.phone"
        label="Phone"
        placeholder="0 000 000 0000"
      >
      </v-text-field>
      <v-btn color="success" type="submit">Update</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IStudent } from "@/types";
import { AxiosResponse } from "axios";
import axios from "@/plugins/axios";

interface IEditStudentViewData {
  student: IStudent;
}

export default Vue.extend({
  name: "EditStudentView",

  data(): IEditStudentViewData {
    return {
      student: {},
    };
  },

  created() {
    axios
      .get(`/edit-student/${this.$route.params.id}`)
      .then((res: AxiosResponse<IStudent>) => {
        this.student = res.data;
      });
  },

  methods: {
    handleUpdateForm() {
      axios
        .put(`/update-student/${this.$route.params.id}`, this.student)
        .then(() => this.$router.push("/view"))
        .catch((error: string) => {
          throw new Error(error);
        });
    },
  },
});
</script>

<style scoped></style>
