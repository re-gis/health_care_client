<template>
    <section class="why-choose section" >
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Welcome to the future</h2>
                        <img src="/img/section-img.png" alt="#">
                        <p>Welcome to a new era in healthcare, where access to top-notch medical services is just a click away.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <!-- Start Choose Left -->
                    <div class="choose-left">
                        <h3>Who We Are</h3>
                        <p>We are a pioneering company dedicated to ushering in the future of healthcare, and our mission is to bring personalized, universal coverage of telehealth services to you. In our world, the future of health is now in your home.<br>
                            We believe that quality healthcare should know no boundaries, and that's why we've harnessed the power of technology to provide comprehensive, accessible, and convenient healthcare solutions.<br>
                            Our commitment to your well-being is unwavering, and we're excited to be your trusted partner in this healthcare revolution.</p>
                        <p>Join us as we embark on a journey to a healthier and brighter tomorrow, where the best in healthcare is always within your reach.</p>

                    </div>
                    <!-- End Choose Left -->
                </div>
                <div class="col-lg-6 col-12">
                    <!-- Start Choose Rights -->
                    <div class="choose-right">
                        <div class="video-image">
                            <!-- Video Animation -->
                            <div class="promo-video">
                                <div class="waves-block">
                                    <div class="waves wave-1"></div>
                                    <div class="waves wave-2"></div>
                                    <div class="waves wave-3"></div>
                                </div>
                            </div>
                            <!--/ End Video Animation -->
                            <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" class="video video-popup mfp-iframe"><i class="fa fa-play"></i></a>
                        </div>
                    </div>
                    <!-- End Choose Rights -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style>
.why-choose{
	background:#fff;
}
.why-choose .choose-left h3{
	font-size:24px;
	font-weight:600;
	color:#2C2D3F;
	position:relative;
	padding-bottom:20px;
	margin-bottom:24px;
}
.why-choose .choose-left h3:before{
	position:absolute;
	content:"";
	left:0;
	bottom:0;
	height:2px;
	width:50px;
	background:#1a76d1;
}
.why-choose .choose-left p{
	margin-bottom:35px;
}
.why-choose .choose-left .list{}
.why-choose .choose-left .list li {
	color: #868686;
	margin-bottom: 12px;
}
.why-choose .choose-left .list li:last-child{
	margin-bottom:0px;
}
.why-choose .choose-left .list li i{
	height:15px;
	width:15px;
	line-height:15px;
	text-align:center;
	background:#1a76d1;
	color:#fff;
	font-size:14px;
	border-radius:100%;
	padding-left:2px;
	margin-right:16px;
}
.why-choose .choose-right{
	height:100%;
	width:100%;
	background-image:url('/img/video-bg.jpg');
	background-size:cover;
	background-position:center;
	background-repeat:no-repeat;
	position:relative;
}
.why-choose .choose-right .video {
	color: #fff;
	height: 70px;
	width: 70px;
	line-height: 70px;
	text-align: center;
	border-radius: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -35px;
	margin-top: -35px;
	font-size: 21px;
	background: #1a76d1;
	padding-left: 4px;
}
.why-choose .choose-right .video:hover{
	transform:scale(1.1);
}
.why-choose .video-image .waves-block .waves {
	position: absolute;
	width: 200px;
	height: 200px;
	background: #fff;
	opacity: 0;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	border-radius: 100%;
	-webkit-animation: waves 3s ease-in-out infinite;
	animation: waves 3s ease-in-out infinite;
	left: 50%;
	margin-left: -100px;
	top: 50%;
	margin-top: -100px;
}
.why-choose .video-image .waves-block .wave-1 {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
}
.why-choose .video-image .waves-block .wave-2 {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}
.why-choose .video-image .waves-block .wave-3 {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
}
</style>
