function myFunction() {
    alert('Thanks for your message. We will write you back soon.');
}


function historyShow(){
    document.getElementById("content").innerHTML= "<h1 align='center' id='titleHistory' font-family='Apple Chancery'><br>Millions of customers trust us for their rental car needs:\n</br></h1>" +
         "<br>" +"<h3 align='center' id='bodyHistory'>   RentACar is much more than a rental car business. We are a company that prides itself on dedication to customers changing needs by offering a wide variety of vehicles. We boast a rich history of significant first steps, ambitious ideas and innovation that has formed our company into the reputable brand it is today. In 2009, ambitious pioneers of auto renting: Martin Romero, Coral Romero, Ibrahima Haidara and Miriam Lopez began what is now known as The RentACar Corporation. Starting with a mere 12 Model-Ts and set up shop just south of Germany's loop. Together they swiftly turned the small RentACar company into a well-known brand. In fact, by 2015, RentACar was generating annual revenues of about $1 million.</h3>" +
        "\n"
}

function contactShow() {

    document.getElementById("content").innerHTML =
        "    <head>\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
        "        <style>\n" +
        "        input[type=text], select, textarea {\n" +
        "        align: center;\n"+
        "        display:block;\n "+
        "        margin:0 auto;\n"+
        "        width: 25%;\n" +
        "        padding: 12px;\n;" +
        "        border: 1px solid #ccc;\n" +
        "        border-radius: 4px;\n" +
        "        box-sizing: border-box;\n" +
        "        margin-top: 9px;\n" +
        "        margin-left: 9px;\n" +
        "        margin-bottom: 16px;\n" +
        "        resize: vertical;\n" +
        "    }\n" +
        "\n" +
        "    input[type=submit] {\n" +
        "        align: center;\n"+
        "        display:block;\n "+
        "        margin:0 auto;\n"+
        "        background-color: #4CAF50;\n" +
        "        color: white;\n" +
        "        margin-top: 6px;\n" +
        "        padding: 12px 20px;\n" +
        "        border: none;\n" +
        "        border-radius: 4px;\n" +
        "        cursor: pointer;\n" +
        "    }\n" +
        "\n" +
        "    input[type=submit]:hover {\n" +
        "        align: center;\n"+
        "        display:block;\n "+
        "        margin:0 auto;\n"+
        "        background-color: #45a049;\n" +
        "        margin-top: 6px;\n" +
        "    }\n" +
        ".formtype{"+
        "border-radius: 5px;"+
        "background-color: #f2f2f2;"+
        "padding: 20px;"+
        "width: 20%;"+
        "text-align: center;"+
        "font-size: 19px;"+
        "margin: 0 auto;"+
        "        align: center;\n"+
        "        display:block;\n "+
        "        margin:0 auto;\n"+
        "}"+
        "\n" +
        "</style>\n" +
        "    </head>\n" +
        "\n" +
        "    <div>\n" +
        "        <form type=\"formtype\" action=\"/action_page.php\">\n" +
        "<fieldset>" +
        "\n"+ "<br>" + "<br>" + "<br>" +
        "<label id=\"fname\">Full Name</label>\n" + "<br>"+
        "    <input type=\"text\" id='fname' name=\"name\" placeholder=\"Your name..\" class='btn'>" + "<br>" +
        "        <label id=\"fname\">Country</label>" + "\n" +"<br>"+
        "    <input type=\"fname\" id=\"fname\" name=\"country\" placeholder='Your country...' class='btn'>" + "<br>" +
        "        <label id=\"fname\">Subject</label>" + "<br>" +
        "<textarea id=\"fname\" name=\"fname\" placeholder=\"Write something..\" style=\"height:200px\" class='btn'></textarea>"+"<br>"+
        "<button id='contactUsButton' type='button' onclick='myFunction()' ='center' class='btn btn-warning'>Submit</button>\n"+ "\n" +
        "</fieldset>" +
        "        </form>\n" +

        "        </div>\n"
}


function privacyPolicy(){
    document.getElementById('content').innerHTML= "<h1 align='center'>PRIVACY AND COOKIE POLICY</h1>"+"<h6>We have created this privacy statement in order to demonstrate our firm commitment to privacy. The following discloses our information gathering and dissemination practices for this website.</h6>"+

        "<h3>General</h3>"+
        "<h6> The principal purposes for which we collect and store your personal and financial information are to process and assist with your membership application, allow you to list your vehicle, allow you to reserve, book and collect a vehicle, authorise and collect payment, bill you or pay you, respond to your inquiries, improve our products and services and maintain your account with us. We may also share this information with other companies within the easyGroup.</h6>"+

        "<h3>IP Address</h3>"+
        "<h6>We use your IP address to help diagnose problems with our server, and to administer our Web site. Your IP address is also used to help identify you and to gather broad demographic information.</h6>"+

        "<h3>Registration</h3>"+
        "<h6>Our site's registration form requests users to voluntarily give us contact information (like their name) and unique identifiers (like their email address). This information is used as follows:</h6>"+

        "<h6>The customer's contact information is used to contact the visitor when necessary which may include for example, contacting the customer by email or by phone to assist with or administer the customer’s application and to help improve our services.</h6>"+

        "<h6>With your permission we also use customer contact information from the registration form to send the user information about our company or companies within the easy Group. Users may opt-out of receiving future mailings; see the choice/opt-out section below.</h6>"+

        "</h6>Unique identifiers (such as email addresses) are collected to verify the user's identity, and for use as account numbers in our record system.</h6>"+

        "<h3>Booking Information</h3>"+
        "<h6>Our site uses a booking form to enable customers to obtain information and make Bookings. We collect visitor's contact information (like their name and address), unique identifiers (like their email address and driving licence details), financial information (like their credit/debit card numbers), and other information (like driving history). This information is used as follows:</h6>"+

        "<h6>The customer's contact information is used to get in touch with the visitor when necessary which may include for example, contact before during and after a Booking by email or by phone to assist with or administer a Booking and to help improve our services. Contact information from the booking form is also used to send bookings and information about our company to our customers. Users may opt-out of receiving future mailings; see the choice/opt-out section below.</h6>"+

        "<h6>Financial information that is collected is used to check the users' qualifications and bill the user for products, services and associated charges and fees.</h6>"+

        "<h6>Unique identifiers (such as email addresses) are collected from Web site visitors to verify the user's identity and for use as account numbers in our record system.</h6>"+

        "<h6>Other information (such as driving history) is used to assess the eligibility of customers to join as members of our service and to participate in our insurance programme(s).</h6>"+

        "<h6>Please note that our websites will assume you to agree to receive e-communications when you are making a booking, and to receive certain important product updates. On all subsequent e-communications you will have the opportunity to opt-out of future direct marketing material. Please also see Choice/Opt-out below. Please note that you cannot opt out of communications regarding bookings and terms of service.</h6>"+

        "<h3>Choice/Opt-out</h3>"+
        "<h6>You have the right to ask us not to send you direct marketing material, this can be done by a written request to us. On our e-communications you can also use the unsubscribe function to opt-out of future communications. Once we have properly received your notification, we will take steps to cease using your information in this manner. Additional opt-out settings are available to members through their member dashboard.</h6>"

}


function termsAndConditions(){
    document.getElementById('content').innerHTML=
        "<h1 align='center'>RentACar terms and conditions of rental agreement to hire rental vehicles</h1>"+
        "<h6>The Rental Agreement comprises these terms and conditions and the rental document setting out the hire details which is provided with each vehicle at the point of hire (referred to in these terms and conditions as the 'Rental Document'). The Rental Agreement is made between Avis Rent A Car Limited (herein referred to as 'the owner') and the person and/or company signing the Rental Document (herein referred to as 'the hirer') whose particulars are recorded in the Rental Document. It is hereby agreed as follows:</h6>"+
        "<h3>VEHICLE DESCRIPTION AND TERM OF HIRE</h3>"+
        "<h6>1. The owner will let and the hirer will take the motor vehicle, details of which are described in the Rental Document (herein referred to as 'the vehicle'), for the term of hire as described in the Rental Document.</h6>"+


        "<h3> HIRER USES THEIR OWN INSURANCE</h3>"+
        "<h6>23. If the hirer elects to use their own insurance, then the hirer accepts all liability for all losses, costs and damages set out in clause 15 (a) to (c), and agrees that clause 17 does not apply to such losses, costs and damages. </h6>"+

        "<h3>TRAFFIC OFFENCES</h3>"+
        "<h6>24. All penalties related to traffic and/or parking offences are the responsibility of the hirer and the owner may charge the hirer's credit card for any traffic and/or parking offence infringement fees incurred by the hirer. The owner undertakes, in the event that the owner receives notice of any traffic or parking offenses incurred by the hirer, to send a copy of any such notice to the hirer as soon as is practicable and to provide the necessary information to the relevant issuing authority for such notices to be directed to the hirer. The hirer has the right to challenge, complain about, query or object to the alleged offence to the issuing enforcement authority and has a right to seek a court hearing (within 56 days from the date of issue of the infringement notice or 28 days from the date of issue of the reminder notice). </h6>"+

        "<h6>The owner may also charge an administration fee of $30 plus GST to cover the cost of processing and sending to the hirer notices related to traffic and/or parking infringements. </h6>"+

        "<h3>CANCELLATION OF HIRE AGREEMENT</h3>"+
        "<h6>25. The owner has the right to terminate the hire and take immediate possession of the vehicle if the hirer fails to comply with any of the terms of the Rental Agreement, or if the vehicle is damaged. The termination of a hire under the authority of this clause shall be without prejudice to the other rights of the owner and the rights of the hirer under the Rental Agreement or otherwise. </h6>"+

        "<h3>GPS</h3>"+
        "<h6>26. The hirer acknowledges that they are liable for:  </h6>"+
        "<h6>(a) damage to or loss, including theft, of the GPS unit and/or its accessories.  The charge is $200 plus GST per unit; and  </h6>"+
        "<h6>(b) a handling and freight fee where any GPS accessory is damaged and/or not returned  with the GPS unit. The charge is $30 plus GST per rental.  </h6>"+

        "<h3> OPTIONAL COVERAGES</h3>"+
        "<h6>In addition to the insurance cover set out above, the hirer may also choose the Personal Accident Insurance (PAI) and/or Personal Effects and Baggage Insurance (PEB) and/or Excess Reduction (ER) options by so indicating on the Rental Document. PAI and PEB insurance is offered on behalf of the current policy underwriter, and the owner acts only as their agent in arranging this insurance. The amount of that excess and the daily rate payable in respect of ER is dependent upon the age of the hirer, the type of vehicle hired, and the location of hire. </h6>"+

        "<h6>The hirer acknowledges that the underwriter of, and/or the terms of, and/or the charges payable for PAI, PEB or ER may change without notice to the hirer; or the availability of the PAI, PEB or ER options may be cancelled without notice to the hirer. </h6>"+

        "<h3> PRIVACY ACT</h3>"+
        "<h6>The information requested from the hirer is to enable the owner to assess the hirer’s request to hire a vehicle.  The hirer does not have to supply this information, but if the hirer does not, then the owner is unable to hire the vehicle. The hirer acknowledges that the owner will collect, hold and use the hirer’s personal information for purposes related to the hire of the vehicle and the provision of related customer services, including direct marketing and assessing customer satisfaction with products and services provided by the owner. The hirer further acknowledges that such personal information may be disclosed to debt collection agencies in the event that the hirer defaults in the payment of any monies owing to the owner, or other parties involved in an accident with the vehicle while on hire to the hirer; or any organisations responsible for the processing or handling of traffic related infringements; and the hirer hereby authorises the disclosure of their personal information for such purposes.</h6>"+

        "<h3> NOTE TO HIRER </h3>"+
        "<h6> NOTE - THE OWNER MUST GIVE THE HIRER AT LEAST ONE COPY OF THE RENTAL AGREEMENT WHICH MUST BE KEPT IN THE VEHICLE THROUGHOUT THE TERM OF THE HIRE AND PRODUCED ON DEMAND TO AN ENFORCEMENT OFFICER.</h6>"



}


// Oculto usuario admin

function admin(){


    document.getElementById('content').innerHTML = document.getElementById('admin1').innerHTML;



}


