<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update Student</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="student.email"
            required
          />
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input
            type="text"
            class="form-control"
            v-model="student.phone"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-danger btn-block">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IStudent } from "@/types";
import { AxiosResponse } from "axios";

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
    this.$axios
      .get(`/edit-student/${this.$route.params.id}`)
      .then((res: AxiosResponse<IStudent>) => {
        this.student = res.data;
      });
  },

  methods: {
    handleUpdateForm() {
      this.$axios
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
