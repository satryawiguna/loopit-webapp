<template>
  <div>
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Welcome to Loopit Application</h1>
          <p class="col-md-8 fs-4">The way we move is changing. Loopit powers car subscription, rideshare and modern fleet rental management solutions for your brand. Unlock the potential of recurring revenue.</p>
          <br />
          <v-btn color="primary" :href="'/cars'">See Our Cars</v-btn>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Dashboard"
}
</script>
