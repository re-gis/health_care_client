<template>
  <div class="row search-all">
    <div class="banner-wrapper">
      <div class="banner-header text-center">
        <h1 class="font-blue">Search Doctor, Make an Appointment</h1>
        <p class="font-blue">
          Discover the best doctors, clinic & hospital the city nearest to you.
        </p>
      </div>
      <div class="search-box">
        <form action="templateshub.net">
          <div class="form-group search-location">
            <input
              type="text"
              class="form-control"
              placeholder="Search Location"
            />
          </div>
          <div class="form-group search-info">
            <input
              type="text"
              class="form-control"
              placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
            />
          </div>
          <button type="submit" class="btn btn-primary search-btn">
            <i class="fas fa-search"></i> <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerBody",
  mounted() {},
};
</script>

<style>
.search-all {
  justify-content: center;
  position: relative;
  transform: translateY(-150%);
  z-index: 10;
}
/* .font-blue{
    color: #1a76d1 !important;
} */
.banner-wrapper {
  margin-top: 220px;
  max-width: 800px;
  width: 100%;
}
.banner-wrapper .banner-header {
  margin-bottom: 30px;
}
.banner-wrapper .banner-header h1 {
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 600;
}
.banner-wrapper .banner-header p {
  color: #757575;
  font-size: 20px;
  margin-bottom: 0;
}
.search-box form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.search-box .form-control {
  border: 1px solid #ccc;
  box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075);
  border-radius: 5px;
  padding-left: 35px;
}
.search-box .search-location {
  -ms-flex: 0 0 240px;
  flex: 0 0 240px;
  margin-right: 12px;
  position: relative;
  width: 240px;
}
.search-location .form-control {
  background: #fff url(/img/location.png) no-repeat 10px center;
}
.search-box .search-info {
  -ms-flex: 0 0 490px;
  flex: 0 0 490px;
  margin-right: 12px;
  position: relative;
  width: 490px;
}
.search-info .form-control {
  background: #fff url(/img/search.png) no-repeat 10px center;
}
.search-box .search-btn {
  width: 46px;
  -ms-flex: 0 0 46px;
  flex: 0 0 46px;
  height: 46px;
}
.search-box .search-btn span {
  display: none;
  font-weight: 500;
}
.search-box .form-text {
  color: #757575;
  font-size: 13px;
}
</style>
