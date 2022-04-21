<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create a Student</h3>

      <form @submit.prevent="handleSubmitForm" class="form-group">
        <div class="form-group">
          <label>
            Name
            <input
              v-model="student.name"
              type="text"
              class="form-control"
              required
            />
          </label>
        </div>
        <div class="form-group">
          <label>
            Email
            <input
              v-model="student.email"
              type="email"
              class="form-control"
              required
            />
          </label>
        </div>
        <div class="form-group">
          <label>
            Phone
            <input
              v-model="student.phone"
              type="text"
              class="form-control"
              required
            />
          </label>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Student from "@/models/Student";
import { IStudent } from "@/types";

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
      this.$axios
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
