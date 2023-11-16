<template>
    <!-- Footer Area -->
		<footer id="footer" class="footer ">
			<!-- Footer Top -->
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>About Us</h2>
								<p>At the heart of our mission lies a commitment to reinvent healthcare through cutting-edge Healthtech solutions.</p>
								<!-- Social -->
								<ul class="social">
									<li><a href="#"><i class="icofont-facebook"></i></a></li>
									<li><a href="#"><i class="icofont-google-plus"></i></a></li>
									<li><a href="#"><i class="icofont-twitter"></i></a></li>
									<li><a href="#"><i class="icofont-vimeo"></i></a></li>
									<li><a href="#"><i class="icofont-pinterest"></i></a></li>
								</ul>
								<!-- End Social -->
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer f-link">
								<h2>Quick Links</h2>
								<div class="row">
									<div class="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
											<li><a href="/aboutus"><i class="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
											<li><a href="/help"><i class="fa fa-caret-right" aria-hidden="true"></i>Help</a></li>
											<li><a href="/patient/privacy"><i class="fa fa-caret-right" aria-hidden="true"></i>Privacy</a></li>
											<li><a href="/help"><i class="fa fa-caret-right" aria-hidden="true"></i>Cookies</a></li>	
										</ul>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="/help"><i class="fa fa-caret-right" aria-hidden="true"></i>Service</a></li>
											<li><a href="/help"><i class="fa fa-caret-right" aria-hidden="true"></i>Financing</a></li>
											<li><a href="/help"><i class="fa fa-caret-right" aria-hidden="true"></i>Suggestion</a></li>
											<li><a href="/help"><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
											<li><a href="/contactus"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>Open Hours</h2>
                                <p>We are always ready for your health. <br>Receive our friendly service.</p>
								<ul class="time-sidual">
									<li class="day">Monday - Friday <span>8.00-20.00</span></li>
									<li class="day">Saturday <span>9.00-18.30</span></li>
                                    <li class="day">Sunday <span>10.00-14.00</span></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>Newsletter</h2>
								<p>Subscribe to our newsletter to get allour news in your inbox.. <br>Caring for patients is very important.</p>
								<form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
									<input name="email" placeholder="Email Address" class="common-input" onfocus="this.placeholder = ''"
										onblur="this.placeholder = 'Your email address'" required="" type="email">
									<button class="button"><i class="icofont icofont-paper-plane"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Footer Top -->
			<!-- Copyright -->
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-12">
							<div class="copyright-content">
								<p>© Copyright 2023 &nbsp;&nbsp;&nbsp;&nbsp;All Rights Reserved by XXXXXX</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Copyright -->
		</footer>
		<!--/ End Footer Area -->

        <a id="instant-chat" for="check" style="position: fixed; z-index: 20;">
            <span><i class="fas fa-comments"></i></span>
            <span><i class="fas fa-close"></i></span>
        </a>


        <div id="body"> 
            <div class="chat-box">
                <div class="chat-box-header">
                    <span class="emergency-line" data-toggle="modal" data-target="#video_call"><i class="icofont icofont-ui-call"></i></span>
                    Live Chat
                    <span class="chat-box-toggle"><i class="material-icons">close</i></span>
                </div>
                <div class="chat-box-body">
                    <div class="chat-box-overlay">   
                    </div>
                    <div class="chat-logs">
                    </div><!--chat-log -->
                </div>
                <div class="chat-input">      
                    <form>
                        <input type="text" id="chat-input" placeholder="Send a message..."/>
                        <button type="submit" class="chat-submit" id="chat-submit"><i class="material-icons">send</i></button>
                    </form>      
                </div>
            </div>
        </div>

        <!-- Video Call Modal -->
        <div class="modal fade call-modal" id="video_call">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                    
                        <!-- Incoming Call -->
                        <div class="call-box incoming-box">
                            <div class="call-wrapper">
                                <div class="call-inner">
                                    <div class="call-user">
                                        <img class="call-avatar" src="/img/chat-doctor.png" alt="User Image">
                                        <h4>Contact a Dr.in less than <br>2 minutes</h4>
                                        <span>Calling ...</span>
                                    </div>							
                                    <div class="call-items">
                                        <a href="javascript:void(0);" class="btn call-item call-end" data-dismiss="modal" aria-label="Close"><i class="material-icons">call_end</i></a>
                                        <nuxt-link to="/patient/patientvideocall" class="btn call-item call-start" aria-label="Close" data-dismiss="modal"><i class="material-icons">videocam</i></nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Incoming Call -->
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- Video Call Modal -->
    </template>
<style>

/* chat */
.emergency-line{
    float:left;
    margin-left:15px;
    cursor:pointer;
}
#instant-chat {
    bottom: 60px;
    right: 15px;
    padding: 10px 20px;
    background: #1a76d1;
    color: #fff;
    font-size: 25px;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    padding: 0;
    border-radius: 3px;
    box-shadow: 0px 0px 10px #00000026;
    transition: all 0.3s ease;
    outline: none;
}

.btn#my-btn {
     background: white;
    padding-top: 13px;
    padding-bottom: 12px;
    border-radius: 45px;
    padding-right: 40px;
    padding-left: 40px;
    color: #1A76D1;
}



.chat-box {
  display:none;
  background: #efefef;
  position:fixed;
  right:15px;
  bottom:10px;  
  width:350px;
  max-width: 85vw;
  max-height:100vh;
  border-radius:5px;  
  z-index: 2147483647;
/*   box-shadow: 0px 5px 35px 9px #464a92; */
  /* box-shadow: 0px 5px 35px 9px #ccc; */
}
.chat-box-toggle {
  float:right;
  margin-right:15px;
  cursor:pointer;
}
.chat-box-header {
  background: #1A76D1;
  height:70px;
  border-top-left-radius:5px;
  border-top-right-radius:5px; 
  color:white;
  text-align:center;
  font-size:20px;
  padding-top:17px;
}
.chat-box-body {
  position: relative;  
  height:370px;  
  height:auto;
  border:1px solid #ccc;  
  overflow: hidden;
}
.chat-box-body:after {
  content: "";
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgOCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE3NiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTIwLjUuNWwyMyAxMW0tMjkgODRsLTMuNzkgMTAuMzc3TTI3LjAzNyAxMzEuNGw1Ljg5OCAyLjIwMy0zLjQ2IDUuOTQ3IDYuMDcyIDIuMzkyLTMuOTMzIDUuNzU4bTEyOC43MzMgMzUuMzdsLjY5My05LjMxNiAxMC4yOTIuMDUyLjQxNi05LjIyMiA5LjI3NC4zMzJNLjUgNDguNXM2LjEzMSA2LjQxMyA2Ljg0NyAxNC44MDVjLjcxNSA4LjM5My0yLjUyIDE0LjgwNi0yLjUyIDE0LjgwNk0xMjQuNTU1IDkwcy03LjQ0NCAwLTEzLjY3IDYuMTkyYy02LjIyNyA2LjE5Mi00LjgzOCAxMi4wMTItNC44MzggMTIuMDEybTIuMjQgNjguNjI2cy00LjAyNi05LjAyNS0xOC4xNDUtOS4wMjUtMTguMTQ1IDUuNy0xOC4xNDUgNS43IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTg1LjcxNiAzNi4xNDZsNS4yNDMtOS41MjFoMTEuMDkzbDUuNDE2IDkuNTIxLTUuNDEgOS4xODVIOTAuOTUzbC01LjIzNy05LjE4NXptNjMuOTA5IDE1LjQ3OWgxMC43NXYxMC43NWgtMTAuNzV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjcxLjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjE3MC41IiBjeT0iOTUuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iODEuNSIgY3k9IjEzNC41IiByPSIxLjUiLz48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMy41IiBjeT0iMjMuNSIgcj0iMS41Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkzIDcxaDN2M2gtM3ptMzMgODRoM3YzaC0zem0tODUgMThoM3YzaC0zeiIvPjxwYXRoIGQ9Ik0zOS4zODQgNTEuMTIybDUuNzU4LTQuNDU0IDYuNDUzIDQuMjA1LTIuMjk0IDcuMzYzaC03Ljc5bC0yLjEyNy03LjExNHpNMTMwLjE5NSA0LjAzbDEzLjgzIDUuMDYyLTEwLjA5IDcuMDQ4LTMuNzQtMTIuMTF6bS04MyA5NWwxNC44MyA1LjQyOS0xMC44MiA3LjU1Ny00LjAxLTEyLjk4N3pNNS4yMTMgMTYxLjQ5NWwxMS4zMjggMjAuODk3TDIuMjY1IDE4MGwyLjk0OC0xOC41MDV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxwYXRoIGQ9Ik0xNDkuMDUgMTI3LjQ2OHMtLjUxIDIuMTgzLjk5NSAzLjM2NmMxLjU2IDEuMjI2IDguNjQyLTEuODk1IDMuOTY3LTcuNzg1LTIuMzY3LTIuNDc3LTYuNS0zLjIyNi05LjMzIDAtNS4yMDggNS45MzYgMCAxNy41MSAxMS42MSAxMy43MyAxMi40NTgtNi4yNTcgNS42MzMtMjEuNjU2LTUuMDczLTIyLjY1NC02LjYwMi0uNjA2LTE0LjA0MyAxLjc1Ni0xNi4xNTcgMTAuMjY4LTEuNzE4IDYuOTIgMS41ODQgMTcuMzg3IDEyLjQ1IDIwLjQ3NiAxMC44NjYgMy4wOSAxOS4zMzEtNC4zMSAxOS4zMzEtNC4zMSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4=');
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height:100%;
  position: absolute;
  z-index: -1;   
}
#chat-input {
  background: #f4f7f9;
  width:100%; 
  position:relative;
  height:47px;  
  padding-top:10px;
  padding-right:50px;
  padding-bottom:10px;
  padding-left:15px;
  border:none;
  resize:none;
  outline:none;
  border:1px solid #ccc;
  color:#888;
  border-top:none;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  overflow:hidden;  
}
.chat-input > form {
    margin-bottom: 0;
}
#chat-input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #ccc;
}
#chat-input::-moz-placeholder { /* Firefox 19+ */
  color: #ccc;
}
#chat-input:-ms-input-placeholder { /* IE 10+ */
  color: #ccc;
}
#chat-input:-moz-placeholder { /* Firefox 18- */
  color: #ccc;
}
.chat-submit {  
  position:absolute;
  bottom:3px;
  right:10px;
  background: transparent;
  box-shadow:none;
  border:none;
  border-radius:50%;
  color:#1A76D1;
  width:35px;
  height:35px;  
}
.chat-logs {
  padding:15px; 
  height:370px;
  overflow-y:scroll;
}

@media only screen and (max-width: 500px) {
   .chat-logs {
        height:40vh;
    }
}

.chat-msg.user > .msg-avatar img {
  width:45px;
  height:45px;
  border-radius:50%;
  float:left;
  width:15%;
}
.chat-msg.self > .msg-avatar img {
  width:45px;
  height:45px;
  border-radius:50%;
  float:right;
  width:15%;
}
.cm-msg-text {
  background:white;
  padding:10px 15px 10px 15px;  
  color:#666;
  max-width:75%;
  float:left;
  margin-left:10px; 
  position:relative;
  margin-bottom:20px;
  border-radius:30px;
}
.chat-msg {
  clear:both;    
}
.chat-msg.self > .cm-msg-text {  
  float:right;
  margin-right:10px;
  background: #1A76D1;
  color:white;
}
.cm-msg-button>ul>li {
  list-style:none;
  float:left;
  width:50%;
}
.cm-msg-button {
    clear: both;
    margin-bottom: 70px;
}
/* chat end */




.font-color-white{
    color:white;
}
.footer-contact .footer-contact-info p a:hover{
    color:white !important;
}


.footer .single-footer h2 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 40px;
    padding-bottom: 20px;
    text-transform: capitalize;
    position: relative;
}

.footer .single-footer h2::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0px;
    height: 3px;
    width: 50px;
    background: #fff;
}
.footer .single-footer p {
    color: #fff;
}
.footer .single-footer .social {
    margin-top: 25px;
}
ul, ul li {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footer .single-footer .social li {
    display: inline-block;
    margin-right: 10px;
}
.footer .single-footer .social li a {
    height: 34px;
    width: 34px;
    line-height: 34px;
    text-align: center;
    border: 1px solid #fff;
    text-align: center;
    padding: 0;
    border-radius: 100%;
    display: block;
    color: #fff;
    font-size: 16px;
}
.footer .single-footer.f-link li {
    display: block;
    margin-bottom: 12px;
}
.footer .single-footer.f-link li a {
    display: block;
    color: #fff;
    text-transform: capitalize;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
    font-weight: 400;
}
.footer .single-footer.f-link li a:hover {
    padding-left: 8px;
}
.footer .single-footer.f-link li a i {
    margin-right: 10px;
}
.footer .single-footer .time-sidual {
    overflow: hidden;
}
.footer .single-footer .time-sidual {
    margin-top: 15px;
}
.footer .single-footer .time-sidual li {
    display: block;
    color: #fff;
    width: 100%;
    margin-bottom: 5px;
}
.footer .single-footer .newsletter-inner {
    margin-top: 20px;
    position: relative;
}
.footer .single-footer .newsletter-inner input {
    background: transparent;
    border: 1px solid #fff;
    height: 50px;
    line-height: 42px;
    width: 100%;
    margin-right: 15px;
    color: #fff;
    padding-left: 18px;
    padding-right: 70px;
    display: inline-block;
    float: left;
    border-radius: 0px;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
    font-weight: 400;
    border-radius: 5px;
}
.footer .single-footer .newsletter-inner .button {
    position: absolute;
    right: 0;
    top: 0;
    height: 50px;
    line-height: 50px;
    width: 50px;
    background: #fff;
    border-left: 1px solid #fff;
    text-shadow: none;
    box-shadow: none;
    display: inline-block;
    border-radius: 0px;
    border: none;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
    border-radius: 0 5px 5px 0;
    color: #1A76D1;
    font-size: 25px;
}
.footer .single-footer .newsletter-inner .button i {
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}
.footer .single-footer .newsletter-inner input:hover {
    padding-left: 22px;
}
.footer .single-footer .newsletter-inner input::placeholder {
    color:white;
}
.footer .copyright {
    background: #1A76D1;
    padding: 25px 0px 25px 0px;
    text-align: center;
}
.footer .copyright .copyright-content p {
    color: #fff;
}
.footer .copyright .copyright-content p a {
    color: #fff;
    font-weight: 400;
    text-decoration: underline;
    display: inline-block;
    margin-left: 4px;
}
.footer .single-footer .time-sidual li span {
    display: inline-block;
    float: right;
}
.copyright{
    border-top:1px solid white;
}

</style>

<script>
export default {
    name: 'footer',
    components: {     
    },
    mounted() {
		$(function() {

            // chat start

            var INDEX = 0;
            $("#chat-submit").click(function(e) {
            e.preventDefault();
            var msg = $("#chat-input").val(); 
            if(msg.trim() == ''){
                return false;
            }
            generate_message(msg, 'self');
            var buttons = [
                {
                    name: 'Existing User',
                    value: 'existing'
                },
                {
                    name: 'New User',
                    value: 'new'
                }
                ];
            setTimeout(function() {      
                generate_message(msg, 'user');  
            }, 1000)

            })

            function generate_message(msg, type) {
            INDEX++;
            var str="";
            str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
            str += "          <span class=\"msg-avatar\">";
            if(type == 'self'){
                str += "            <img src=\"\/img\/chat-patient.png\">";
            }else{
                str += "            <img src=\"\/img\/chat-doctor.png\">";
            }
            str += "          <\/span>";
            str += "          <div class=\"cm-msg-text\">";
            str += msg;
            str += "          <\/div>";
            str += "        <\/div>";
            $(".chat-logs").append(str);
            $("#cm-msg-"+INDEX).hide().fadeIn(300);
            if(type == 'self'){
            $("#chat-input").val(''); 
            }    
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
            }  

            function generate_button_message(msg, buttons){    
            /* Buttons should be object array 
                [
                {
                    name: 'Existing User',
                    value: 'existing'
                },
                {
                    name: 'New User',
                    value: 'new'
                }
                ]
            */
            INDEX++;
            var btn_obj = buttons.map(function(button) {
                return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
            }).join('');
            var str="";
            str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
            str += "          <span class=\"msg-avatar\">";
            str += "            <img src=\"\/img\/chat-patient.png\">";
            str += "          <\/span>";
            str += "          <div class=\"cm-msg-text\">";
            str += msg;
            str += "          <\/div>";
            str += "          <div class=\"cm-msg-button\">";
            str += "            <ul>";   
            str += btn_obj;
            str += "            <\/ul>";
            str += "          <\/div>";
            str += "        <\/div>";
            $(".chat-logs").append(str);
            $("#cm-msg-"+INDEX).hide().fadeIn(300);   
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
            $("#chat-input").attr("disabled", true);
            }

            $(document).delegate(".chat-btn", "click", function() {
            var value = $(this).attr("chat-value");
            var name = $(this).html();
            $("#chat-input").attr("disabled", false);
            generate_message(name, 'self');
            })

            $("#instant-chat").click(function() {    
            $("#instant-chat").toggle('scale');
            $(".chat-box").toggle('scale');
            })

            $(".chat-box-toggle").click(function() {
            $("#instant-chat").toggle('scale');
            $(".chat-box").toggle('scale');
            })
            $(".emergency-line").click(function() {    
            $("#instant-chat").toggle('scale');
            $(".chat-box").toggle('scale');
            })
            //chat end
            
            })
    }
}

    
</script>