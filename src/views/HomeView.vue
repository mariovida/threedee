<template>
  <div>
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="wrapper">
        <h1>threedee agency</h1>
      </div>
    </section>

    <section class="free-shipping">
      <div class="wrapper">
        <p>Curabitur velaris dolor, vulputate ut tortor velos.</p>
      </div>
    </section>

    <section class="welcome">
      <div class="wrapper">
        <div class="welcome-left">
          <img src="@/assets/asa.png" />
        </div>
        <div class="welcome-right">
          <h4>Craft, Design & Smile</h4>
          <p>Welcome to <b>threedee</b>, where we bring your visions to life with stunning visualizations that captivate and engage your audience. Our team of skilled 3D artists, designers, and animators specialize in creating high-quality 3D models, animations, and virtual reality experiences for a wide range of industries and applications.</p>
          <p>Whether you need architectural visualizations for real estate projects, product animations for marketing campaigns, or immersive VR experiences for training or entertainment, we have the expertise and tools to deliver exceptional results. We use the latest software and techniques to ensure our 3D creations are accurate, realistic, and eye-catching.</p>
          <p>At our agency, we are committed to exceeding our clients' expectations and delivering projects on time and within budget. Contact us today to discuss your 3D needs and let us help you bring your ideas to life.</p>
          <router-link to="./contact">CONTACT US</router-link>
        </div>
      </div>
    </section>

     <section class="categories">
      <div class="wrapper">
        <h3>Our latest projects</h3>
        <div class="category-box">
          <div class="category-item category-item_1"></div>
          <div class="category-item category-item_2"></div>
          <div class="category-item category-item_3"></div>
          <div class="category-item category-item_4"></div>
        </div>
      </div>
    </section>

    <section class="explore">

    </section>
  </div>
</template>

<script>
  export default {
    created(){
        document.title = "ThreeDee Agency"
    }
  }
</script>
