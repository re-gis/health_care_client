<template>
  <!-- Preloader -->
  <div class="preloader">
    <div class="loader">
      <div class="loader-outter"></div>
      <div class="loader-inner"></div>

      <div class="indicator">
        <svg width="16px" height="12px">
          <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
          <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
        </svg>
      </div>
    </div>
  </div>
  <!-- End Preloader -->
  <!-- Header -->
  <header class="header">
    <nav class="header-nav flex items-center">
      <div class="">
        <a id="mobile_btn" href="javascript:void(0);">
          <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <a href="/" class="navbar-brand logo">
          <img
            src="~/assets/img/logo-header.png"
            class="img-fluid"
            alt="Logo"
          />
        </a>
      </div>
      <div class="main-menu-wrapper">
        <div class="menu-header">
          <a href="#" class="menu-logo">
            <img
              src="~/assets/img/logo-header.png"
              class="img-fluid"
              alt="Logo"
            />
          </a>
          <a id="menu_close" class="menu-close" href="javascript:void(0);">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <ul class="main-nav">
          <li class="active">
            <nuxt-link to="/patient/signin"
              ><i class="icofont icofont-user size-xlarge"></i>&nbsp;I am a
              Patient
            </nuxt-link>
          </li>
          <li class="active">
            <nuxt-link to="/patient/signin"
              ><i class="icofont icofont-user size-xlarge"></i>&nbsp;I am a
              Family Member
            </nuxt-link>
          </li>
          <li class="active">
            <nuxt-link to="/doctor/signin"
              ><i class="icofont icofont-doctor size-xlarge"></i>&nbsp;I am a
              Doctor
            </nuxt-link>
          </li>
          <li class="active">
            <nuxt-link to="/doctor/signin"
              ><i class="icofont icofont-doctor size-xlarge"></i>&nbsp;I am a
              Pharmacist
            </nuxt-link>
          </li>
          <li
            class="nav-item has-arrow logged-item active"
            @click="toggleDropdown"
          >
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span class="user-img"> Collaborate With Us </span>
            </a>
            <div
              v-if="isDropdownOpen"
              class="dropdown-menu absolute top-[100%] z-index-100 float-left w-[100rem] py-[0.5rem] mr-[200px] mt-[0.125rem] text-left dropdown-menu-right"
            >
              <nuxt-link class="dropdown-item" to="/collaberate/dpn"
                ><i class="icofont icofont-doctor"></i> Doctors, Pharmacists And
                Nurses</nuxt-link
              >
              <nuxt-link class="dropdown-item" to="/collaberate/fdf"
                ><i class="icofont icofont-doctor-alt"></i> Find Doctors
                Financing</nuxt-link
              >
              <nuxt-link class="dropdown-item" to="/collaberate/hc"
                ><i class="icofont icofont-hospital"></i> Hospitals and
                Clinics</nuxt-link
              >
              <nuxt-link class="dropdown-item" to="/collaberate/NominateDoctor"
                ><i class="icofont icofont-stethoscope"></i> Nominate
                Doctor</nuxt-link
              >
              <nuxt-link class="dropdown-item" to="/collaberate/rdk"
                ><i class="icofont icofont-read-book"></i> Request your Digital
                Kit</nuxt-link
              >
              <nuxt-link class="dropdown-item" to="/collaberate/rsk"
                ><i class="icofont icofont-book"></i> Request your Starter
                Kit</nuxt-link
              >
              <nuxt-link class="dropdown-item" to="/collaberate/syh"
                ><i class="icofont icofont-notebook"></i> Share Your Telehealth
                Story</nuxt-link
              >
              <nuxt-link class="dropdown-item" to="/collaberate/wwu"
                ><i class="icofont icofont-handshake-deal"></i> Work With
                Us</nuxt-link
              >
            </div>
          </li>
        </ul>
      </div>
      <ul class="header-navbar-rht">
        <li class="">
          <div
            class="inline-block pl-[10px] mr-10"
          >
            <!-- Update select styles with Tailwind classes -->
            <select
              class="block cursor-pointer w-[110px] px-3 border-[#ccc] text-[#333] font-[400] bg-clip-padding border rounded-[0.25rem] transition outline-none justify-center items-center h-[45px]"
              name="options"
            >
              <option
                class="en"
                value="en"
                style="background-image: url('/img/flags/gb.png')"
              >
                English
              </option>
              <option
                class="ar"
                value="ar"
                style="background-image: url('/img/flags/ar.png')"
              >
                Arab
              </option>
              <option
                class="fr"
                value="fr"
                style="background-image: url('/img/flags/fr.png')"
              >
                French
              </option>
              <option
                class="sp"
                value="sp"
                style="background-image: url('/img/flags/sp.png')"
              >
                Spanish
              </option>
              <!-- Add more options as needed -->
            </select>
          </div>
          <div class="header-contact-img">
            <i class="far fa-hospital"></i>
          </div>
          <div class="header-contact-detail">
            <p class="contact-header">
              <nuxt-link to="/contactus" class="text-blue-500"
                >Contact</nuxt-link
              >
            </p>
            <p class="contact-info-header">
              <a href="tel:+XX XXX XXX XXX" class="text-blue-500"
                >+XX XXX XXX XXX</a
              >
            </p>
          </div>
        </li>
        <li class="">
          <nuxt-link to="/patient/signin" class=" header-login"
            >signin / signup</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
  <!-- /Header -->
</template>

<script>
export default {
  name: "patientheader",
  components: {},
  mounted() {
    $(".preloader").addClass("preloader-deactivate");
  },

  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
<style scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
}
.font-blue {
  color: #1a76d1;
}
.mr-10 {
  margin-right: 10px;
}
/*================================================
Preloader Area CSS
=================================================*/
.preloader {
  position: fixed;
  left: 0;
  width: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  z-index: 9999999;
  -webkit-transition: 0.9s;
  transition: 0.9s;
}

.preloader .loader {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 45%;
  -webkit-transform: translateY(-45%);
  transform: translateY(-45%);
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.preloader .loader .loader-outter {
  position: absolute;
  border: 4px solid #ffffff;
  border-left-color: transparent;
  border-bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-animation: loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}

.preloader .loader .loader-inner {
  position: absolute;
  border: 4px solid #ffffff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  left: calc(40% - 21px);
  top: calc(40% - 21px);
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}

.preloader .loader .indicator {
  position: absolute;
  right: 0;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%) scale(1.5);
  transform: translateY(-50%) scale(1.5);
}

.preloader .loader .indicator svg polyline {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.preloader .loader .indicator svg polyline#back {
  stroke: #ffffff;
}

.preloader .loader .indicator svg polyline#front {
  stroke: #1a76d1;
  stroke-dasharray: 12, 36;
  stroke-dashoffset: 48;
  -webkit-animation: dash 1s linear infinite;
  animation: dash 1s linear infinite;
}

.preloader::before,
.preloader::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 60%;
  z-index: -1;
  background: #1a76d1;
  -webkit-transition: 0.9s;
  transition: 0.9s;
}

.preloader::after {
  left: auto;
  right: 0;
}

.preloader.preloader-deactivate {
  visibility: hidden;
}

.preloader.preloader-deactivate::after,
.preloader.preloader-deactivate::before {
  width: 0;
}

.preloader.preloader-deactivate .loader {
  opacity: 0;
  visibility: hidden;
}

@-webkit-keyframes loader-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes loader-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@-webkit-keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
/* End Preloader */

.size-xlarge {
  font-size: x-large;
}
.dropdown-item:hover {
  color: #1a76d1;
}
</style>
