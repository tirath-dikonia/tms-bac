export function forgotPasswordUserMailTemplate (reset_password_link){
    const html: string= `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>GreatAmericanCharters</title>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
          <style type="text/css">
             /* Forces Hotmail to display normal line spacing. */
             td, p, div, span, strong, a {
             line-height: 100%;
             }
             body, img, div, p, ul, li, span, strong, a {
             margin: 0;
             padding: 0;
             }
             /* Resolves webkit padding issue. */
             table td {
             border-collapse: collapse;
             vertical-align: top;
             }
             /****** END RESETTING DEFAULTS ********/
             body, #body_style {
             width: 100% !important;
             color: #292c30;
             font-size: 14px;
             font-family: 'Raleway', sans-serif !important;
             line-height: 20px;
             -webkit-text-size-adjust: none;
             -ms-text-size-adjust: none;
             }
             a {
             color: #5dabfb;
             text-decoration: none;
             border: none !important;
             outline: none !important;
             }
             a:link {
             color: #0A1932;
             text-decoration: none;
             }
             a:visited {
             color: #add797;
             text-decoration: none;
             }
             a:hover {
             text-decoration: none !important;
             }
             a[href^="tel"], a[href^="sms"] {
             text-decoration: none;
             color: #292c30;
             pointer-events: none;
             cursor: default;
             }
             .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
             text-decoration: default;
             color: #0A1932 !important;
             pointer-events: auto;
             cursor: default;
             }
             img {
             border: none;
             outline: none;
             text-decoration: none;
             height: auto;
             max-width: 100%;
             }
             table {
             border-spacing: 0;
             border-collapse: collapse;
             mso-table-lspace: 0pt;
             mso-table-rspace: 0pt;
             }
             tr, td {
             margin: 0;
             padding: 0;
             }
             /**
             * @tab Change Content Styling
             * @section banner section
             * @theme Change Content Styling
             */
             #banner{
             /*@editable*/ background-color:#f4f4f4 !important;
             }
             /**
             * @tab Change Content Styling
             * @section WelcomeParadise section
             * @theme Change Content Styling
             */
             #WelcomeParadise{
             /*@editable*/ background-color:#fff !important;
             /*@editable*/ color:#fff !important;		
             }
             /**
             * @tab Change Content Styling
             * @section service section
             * @theme Change Content Styling
             */
             #service{
             /*@editable*/ background-color:#5fb0e5 !important;
             /*@editable*/ color:#000 !important;		
             }
             /**
             * @tab Change Content Styling
             * @section weather section
             * @theme Change Content Styling
             */
             #weather{
             /*@editable*/ background-color:#fff !important;
             /*@editable*/ color:#000 !important;		
             }
             /**
             * @tab Change Content Styling
             * @section paravideo section
             * @theme Change Content Styling
             */
             #paravideo{
             /*@editable*/ background-color:#99ce00  !important;
             /*@editable*/ color:#000 !important;		
             }	
             /**
             * @tab Change Content Styling
             * @section testinomial section
             * @theme Change Content Styling
             */
             #testinomial{
             /*@editable*/ background-color:#eeeeee  !important;
             /*@editable*/ color:#000000 !important;		
             }	
             /**
             * @tab Change Content Styling
             * @section footertop section
             * @theme Change Content Styling
             */
             #footertop{
             /*@editable*/ background-color:#F8F7FA  !important;
             /*@editable*/ color:#000 !important;		
             }
             /**
             * @tab Change Content Styling
             * @section socialicon section
             * @theme Change Content Styling
             */
             #socialicon{
             /*@editable*/ background-color:#71ac00  !important;
             /*@editable*/ color:#000000 !important;		
             }
             /**
             * @tab Change Content Styling
             * @section footerbottom section
             * @theme Change Content Styling
             */
             #footerbottom{
             /*@editable*/ background-color: #181818 !important;
             /*@editable*/ color:#000000 !important;		
             }	
             @media only screen and (max-width: 639px) {
             body[yahoo] .table_wrapper {
             width: 100% !important;
             }
             body[yahoo] img.deviceWidth, body[yahoo] img.img {
             width: 100%;
             height: auto
             }
             body[yahoo] .weather {
             padding-left: 0 !important;
             padding-right: 0 !important;
             }
             body[yahoo] .paddSpace {
             padding-left: 5px !important;
             padding-right: 5px !important;
             }
             }
             @media only screen and (max-width: 599px) {
             body[yahoo] .deviceWidth {
             width: 100% !important;
             }
             body[yahoo] .center {
             text-align: center !important;
             }
             body[yahoo] .font-large {
             font-size: 25px !important;
             letter-spacing: 1px !important;
             }
             body[yahoo] .hide {
             display: none !important;
             }
             body[yahoo] .border-none {
             border: none !important;
             }
             body[yahoo] .border-btm {
             border-bottom: 1px solid #000 !important;
             }
             body[yahoo] .space20 {
             padding: 20px !important;
             }
             body[yahoo] .space10 {
             padding: 10px !important;
             }
             body[yahoo] .img {
             width: 100% !important;
             border: 0;
             display: block;
             }
             body[yahoo] .ht20 {
             height: 20px !important;
             }
             body[yahoo] .ht30 {
             height: 30px !important;
             }
             body[yahoo] .font20 {
             font-size: 20px !important;
             }
             body[yahoo] .font11 {
             font-size: 10px !important;
             }
             body[yahoo] .deviceTD {
             width:100%;
             display: table;
             }
             }
             @media only screen and (max-width: 479px) {
             body[yahoo] .imgIcon {
             width: 70%;
             height: auto
             }
             body[yahoo] .weather table td {
             font-size: 12px !important;
             line-height: 12px !important;
             }
             body[yahoo] .paddSpace {
             padding-left: 5px !important;
             padding-right: 5px !important;
             }
             }
          </style>
       </head>
       <body style="width:100% !important; color:#292c30; background:#F8F7FA; font-family: 'Raleway', sans-serif; font-size:14px; line-height:20px;" alink="#9d470a" link="#9d470a" text="#333333" yahoo="fix">
          <table width="576" border="0" cellspacing="0" cellpadding="0" align="center" class="table_wrapper">
             <tr>
                <td height="32"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
             </tr>
             <!-- Second Row Starts -->
             <tr mc:repeatable="Three column">
                <td>
                   <table border="0" cellspacing="0" cellpadding="0" width="100%" >
                      <tr>
                         <td style="padding-left:20px; padding-right:20px; background:#ffffff;">
                            <table border="0" cellspacing="0" cellpadding="0" width="100%" >
                               <tr>
                                  <td height="24"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                               </tr>
                               <tr>
                                  <td align="left"><a href="#" target="blank"><img src="images/logo.png" width="80" height="" alt=""/></a></td>
                               </tr>
                               <tr>
                                  <td height="40"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                               </tr>
                          <tr>
                                  <td height="24"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                               </tr>
                               <tr>
                                  <td style="font-weight:400;font-size: 14px; line-height: 20px; color:#344054;font-family: 'Raleway', sans-serif;">
                                     Dear Member,
                                  </td>
                               </tr>
                          <tr>
                                  <td height="15"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                               </tr>
                         <tr>
                                  <td style="font-weight:400;font-size: 14px; line-height: 20px; color:#344054;font-family: 'Raleway', sans-serif;">
                            
                                     You have been kindly requested to reset your password. You can do the same by following the link given below.
      </td>
                               </tr>
                         <tr>
                                  <td height="15"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                               </tr>
                         <tr>
                                  <td style="font-weight:400;font-size: 14px; line-height: 20px; color:#344054;font-family: 'Raleway', sans-serif;">
                                     Thanks for your cooperation.
                                  </td>
                               </tr>
                               <tr>
                                  <td height="24"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                               </tr>
                         
                               <tr>
                                  <td>
                                   
                                    <table width="auto" cellspacing="0" cellpadding="0" border="0" align="left">
                                        <tr> 
                                           <td class="btn" style="width:160px;color:#fff; font-size: 12px; line-height: 1; height: 34px; font-weight: 500; text-align: center; border-radius:8px; -webkit-border-radius:8px;font-family: 'Raleway', sans-serif; background:#1c2c50" >
                                  <a href="${reset_password_link}" style="border: 1px solid #5980b6 !important;border-radius: 8px;color:#fff; display: inline-block; border-radius:8px; -webkit-border-radius:8px; line-height:34px; width: 160px; text-decoration: none;font-size:12px;" >Click Here</a></td>
                               </tr>
                                     </table>
                                  
                                  </td>
                               </tr>
                       
                                
                        
                          
                               <tr>
                                  <td height="32"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                               </tr>
                            </table>
                         </td>
                      </tr>
                   </table>
                </td>
             </tr>
             <!-- Third Row Starts -->
             <!-- Footer Section -->
             <tr>
                <td style="background: #F8F7FA; padding-left: 20px; padding-right:20px" id="footertop">
                   <table  border="0" cellspacing="0" cellpadding="0" align="center" width="100%">
                      <tr>
                         <td height="32"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                      </tr>
                      <tr>
                         <td style="color:#475467;font-family: 'Raleway', sans-serif; font-size: 12px; line-height:20px;text-align:left;font-weight:400">
                            Best regards, <br />
                            GAC
                         </td>
                      </tr>
                      
                      <tr>
                         <td height="24"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                      </tr>
                      <tr>
                         <td style="color:#475467;font-family: 'Raleway', sans-serif; font-size: 12px; line-height:20px;text-align:left;font-weight:400">
                            Â©Copyright (C) 2024 GAC. All rights reserved.
                         </td>
                      </tr>
                  <tr>
                         <td style="color:#475467;font-family: 'Raleway', sans-serif; font-size: 12px; line-height:20px;text-align:left;font-weight:400">
                            4233 Arthur Kill Road, Suite 2A, <br />
                            Staten Island NY 10309
                         </td>
                      </tr>
                      <tr>
                         <td height="52"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                      </tr>
                      <tr>
                         <td>
                            <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                               <tr>
                                  <td><a href="#" target="blank"><img src="images/logo.png" width="50" height="" alt=""/></a></td>
                                  <td align="right" style="text-align:right">
                                     <table width="120" cellspacing="0" cellpadding="0" border="0" align="right">
                                        <tr>
                                           <td><a href="#"><img src="images/Twitter.svg" alt=""/></a></td>
                                           <td><a href="#"><img src="images/facebook.svg" alt=""/></a></td>
                                           <td><a href="#"><img src="images/instagram.svg" alt=""/></a></td>
                                        </tr>
                                     </table>
                                  </td>
                               </tr>
                            </table>
                         </td>
                      </tr>
                      <tr>
                         <td height="32"><img src="images/spacer.gif" width="1" height="1" alt="" /></td>
                      </tr>
                   </table>
                </td>
             </tr>
             <!-- Footer Section Ends -->
          </table>
       </body>
    </html>`;
    return html;
 }