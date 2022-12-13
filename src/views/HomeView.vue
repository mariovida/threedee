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
        <p>Bringing your ideas to life with stunning 3D designs.</p>
      </div>
    </section>

    <section class="welcome">
      <div class="wrapper">
        <div class="welcome-left">
          <img src="@/assets/chair1.png" />
        </div>
        <div class="welcome-right">
          <h4>Craft, Design & Smile</h4>
          <p>Welcome to <b>threedee</b>, where we bring your visions to life with stunning visualizations that captivate and engage your audience. Our team of skilled 3D artists, designers, and animators specialize in creating high-quality 3D models, animations, and virtual reality experiences for a wide range of industries and applications.</p>
          <p>Whether you need architectural visualizations for real estate projects, product animations for marketing campaigns, or immersive VR experiences for training or entertainment, we have the expertise and tools to deliver exceptional results. We use the latest software and techniques to ensure our 3D creations are accurate, realistic, and eye-catching.</p>
          <p>At our agency, we are committed to exceeding our clients' expectations and delivering projects on time and within budget. Contact us today to discuss your 3D needs and let us help you bring your ideas to life.</p>
          <router-link to="./contact"><i class="bi-envelope"></i>CONTACT US</router-link>
        </div>
      </div>
    </section>

    <section class="about-us">
      <div class="wrapper">
        <div class="about-us-left">
          <h4>Your Vision is Our Mission</h4>
          <p>We are a premier 3D design agency that specializes in creating captivating visual experiences. Our team of expert designers, artists, and animators use cutting-edge technology to bring your ideas to life with stunning 3D models, animations, and virtual reality experiences.</p>
          <p>Whether you're in real estate, product design, marketing, or entertainment, our 3D design services can help you showcase your vision in a way that stands out. From architectural visualizations to product animations to immersive VR experiences, we have the expertise and resources to deliver exceptional results that meet your needs and exceed your expectations.</p>
          <p>At ThreeDee Agency, we are committed to providing the highest level of quality and customer service. Contact us today to learn more about our 3D design services and discover how we can help you bring your ideas to life.</p>
          <router-link to="./contact"><i class="bi-newspaper"></i>NEWS</router-link>
        </div>
        <div class="about-us-right">
          <img src="@/assets/chair2.png" />
        </div>
      </div>
    </section>

     <section class="categories">
      <div class="wrapper">
        <div class="header-row">
          <h3>Our latest projects</h3>
          <router-link to="./products">SEE MORE</router-link>
        </div>
        <div class="category-box">
          <div class="category-item category-item_1"></div>
          <div class="category-item category-item_2"></div>
          <div class="category-item category-item_3"></div>
          <div class="category-item category-item_4"></div>
        </div>
      </div>
    </section>

    <section class="explore">
     
      <img src="@/assets/explore.png" />
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
