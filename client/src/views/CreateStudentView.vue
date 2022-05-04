<template>
  <div class="row justify-content-center">
    <v-form @submit.prevent="handleSubmitForm">
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
      <v-btn color="success" type="submit">Add</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Student from "@/models/Student";
import { IStudent } from "@/types";
import axios from "@/plugins/axios";

interface ICreateStudentViewData {
  student: IStudent;
}

export default Vue.extend({
  name: "CreateStudentView",

  data(): ICreateStudentViewData {
    return {
      student: new Student(),
    };
  },

  methods: {
    handleSubmitForm() {
      axios
        .post("/create-student", this.student)
        .then(() => {
          this.$router.push("/view");
          this.student = new Student();
        })
        .catch((error: string) => {
          throw new Error(error);
        });
    },
  },
});
</script>

<style scoped></style>
