<template>
    <section class="schedule appointment">
        <div class="container">
            <div class="schedule-inner">
                <div class="row search-all">
                    <div class="banner-wrapper">
                        <div class="banner-header text-center">
                            <h1 class="shadow-search">Search Doctor, Make an Appointment</h1>
                            <p class="shadow-search">Discover the best doctors, clinic & hospital the city nearest to you.</p>
                        </div>
                        <div class="search-box">
                            <form action="templateshub.net">
                                <div class="form-group search-location" id="search-autocomplete">
                                    <input type="text" class="form-control search-region" placeholder="Search Location">
                                    <!-- <div class="dropdown-menu-region">
                                        <ul class="list">
                                            <li data-value="1" class="option">region-1</li>
                                            <li data-value="2" class="option">region-2</li>
                                            <li data-value="3" class="option">region-3</li>
                                            <li data-value="4" class="option">region-4</li>
                                            <li data-value="5" class="option">region-5</li>
                                        </ul>
                                    </div> -->
                                </div>
                                <div class="form-group search-info">
                                    <input type="text" class="form-control search-infor" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc">
                                    <!-- <div class="dropdown-menu-infor" id="search-autocomplete">
                                        <ul class="list">
                                            <li data-value="1" class="option">Specialist-1</li>
                                            <li data-value="2" class="option">Specialist-2</li>
                                            <li data-value="3" class="option">Specialist-3</li>
                                            <li data-value="4" class="option">Specialist-4</li>
                                            <li data-value="5" class="option">Specialist-5</li>
                                        </ul>
                                    </div> -->
                                </div>
                                <button type="submit" class="btn btn-primary search-btn"><i class="fas fa-search"></i> <span>Search</span></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12 ">
                        <div class="single-schedule first">
                            <div class="inner">
                                <div class="icon">
                                    <i class="fa fa-ambulance"></i>
                                </div>
                                <nuxt-link to="/patient/patientsearchdoctor" class="mt-0">
                                    <div class="single-content">
                                        <h4>E-Consultancy</h4>
                                        <p>You can get an initial visit or a second opinion from a specialist.</p>
                                        <i class="fa fa-long-arrow-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-schedule middle">
                            <div class="inner">
                                <div class="icon">
                                    <i class="icofont-prescription"></i>
                                </div>
                                <nuxt-link to="/comingsoon" class="mt-0">
                                    <div class="single-content">
                                        <h4>Find your Clinic</h4>
                                        <p>You can receive medical advice and treatment without visiting in person.</p>
                                        <i class="fa fa-long-arrow-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-schedule middle">
                            <div class="inner">
                                <div class="icon">
                                    <i class="icofont-handshake-deal"></i>
                                </div>
                                <nuxt-link to="/patient/patientsearchdoctor" class="mt-0">
                                    <div class="single-content">
                                        <h4>Appointment</h4>
                                        <p>You can receive medical care from the comfort of your own home.</p>
                                        <i class="fa fa-long-arrow-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12">
                        <div class="single-schedule last">
                            <div class="inner">
                                <div class="icon">
                                    <i class="icofont-ui-clock"></i>
                                </div>
                                <nuxt-link to="/cost" class="mt-0">
                                    <div class="single-content">
                                        <h4>What does it cost?</h4>
                                        <p>You can be provided the best treatment in reasonable price.</p>
                                        <i class="fa fa-long-arrow-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>

<script>
export default {
    name: 'ScheduleBody',
    mounted() { 
    }
}
</script>

<style>
.search-all{
    justify-content: center;
    position: relative;
    transform: translateY(-20%);
    z-index: 10;
}
.schedule {
	background: #fff;
	margin: 0;
	padding: 0;
	height: 230px;
}
.schedule .schedule-inner {
	position: relative;
	transform: translateY(-80%);
	z-index:9;
}
.schedule .single-schedule {
	position: relative;
	text-align: left;
	z-index:3;
	border-radius:5px;
	background:#1A76D1;
	 -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
}
.schedule .single-schedule .inner {
	overflow:hidden;
	position: relative;
	padding:30px;
	z-index:2;
}
.schedule .single-schedule:before{
	position: absolute;
    z-index: -1;
    content: '';
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 80%;
    height: 90%;
    background:#1A76D1;
    opacity: 0;
    filter: blur(10px);
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
}
.schedule .single-schedule:hover:before{
	opacity: 0.8;
}
.schedule .single-schedule:hover{
	transform: translateY(-5px);
}
.schedule .single-schedule .icon i{
	position: absolute;
	font-size: 110px;
	color: #fff;
	 -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
	z-index:-1;
	visibility:visible;
	opacity:0.2;
	right: -25px;
	bottom: -30px;
}
.schedule .single-schedule span{
	display:block;
	color:#fff;
}
.schedule .single-schedule h4{
	font-size: 20px;
	font-weight:600;
	display:inline-block;
	text-transform:capitalize;
	color:#fff;
	margin-top:13px;
}
.schedule .single-schedule p{
	color:#fff;
	margin-top:22px;
}
.schedule .single-schedule a {
	color: #fff;
	margin-top: 25px;
	font-weight: 500;
	display: inline-block;
	position: relative;
}
.schedule .single-schedule a:before{
	position:absolute;
	content:"";
	left:0;
	bottom:0;
	height:1px;
	width:0%;
	background:#fff;
	-webkit-transition:all 0.4s ease;
	-moz-transition:all 0.4s ease;
	transition:all 0.4s ease;
}
.schedule .single-schedule a:hover:before{
	width:100%;
	width:100%;
}
.schedule .single-schedule a i{
	margin-left:10px;
}
.schedule .single-schedule .time-sidual{
	
}
.schedule .single-schedule .time-sidual{
	overflow:hidden;
	margin-top:17px;
}
.schedule .single-schedule .time-sidual li {
	display: block;
	color: #fff;
	width: 100%;
	margin-bottom:3px;
}
.schedule .single-schedule .time-sidual li:last-child{
	margin:0;
}
.schedule .single-schedule .time-sidual li span{
	display:inline-block;
	float:right;
}
.schedule .single-schedule .day-head .time {
	font-weight: 400;
	float: right;
}
.mt-0{
    margin-top:0px;
}

/* searchbox */
.search-location,.search-info{
    position: relative;
    display: inline-block;
}
.dropdown-menu-region {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10;
}

.dropdown-menu-region ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu-region li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu-region li:hover {
  background-color: #ddd;
}

.search-region:focus + .dropdown-menu-region {
  display: block;
}




.search-location,.search-info{
    position: relative;
    display: inline-block;
}
.dropdown-menu-infor {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10;
}

.dropdown-menu-infor ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu-infor li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu-infor li:hover {
  background-color: #ddd;
}

.search-infor:focus + .dropdown-menu-infor {
  display: block;
}
.shadow-search{
    color: rgb(255, 255, 255) !important;
    text-shadow: rgb(64, 116, 181) 2px 2px 0px, rgb(64, 116, 181) 2px -2px 0px, rgb(64, 116, 181) -2px 2px 0px, rgb(64, 116, 181) -2px -2px 0px, rgb(64, 116, 181) 2px 0px 0px, rgb(64, 116, 181) 0px 2px 0px, rgb(64, 116, 181) -2px 0px 0px, rgb(64, 116, 181 ) 0px -2px 0px;
}
</style>