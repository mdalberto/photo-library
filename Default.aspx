<%@Page Language="VB" %>
<%@Import Namespace="System.Web.Security" %>
<script language="vb" runat="server">
Sub SignOut(objSender As Object, objArgs As EventArgs)
  'delete the users auth cookie and sign out
  FormsAuthentication.SignOut()
  'redirect the user to their referring page
  Response.Redirect(Request.UrlReferrer.ToString())
End Sub
Sub Page_Load()
  'verify authentication
  If User.Identity.IsAuthenticated Then
    'display Credential information
    displayCredentials.InnerHtml = "Current User : <b>" & User.Identity.Name & "</b>" & _
                                                  "<br><br>Authentication Used : <b>" & User.Identity.AuthenticationType & "</b>"
  Else
    'Display Error Message
    displayCredentials.InnerHtml = "Sorry, You have not been authenticated."
  End If
End Sub
</script>




<html>
    <head>
    	<title>Login</title>
        <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
        <meta charset="utf-8">
        <title>Bootstrap Image Gallery</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/styles.css">
        <link href="css/lightbox.css" rel="stylesheet" />

    </head>


    <body>
      <div class="navbar navbar-default navbar-fixed-top navbar-inverse">
          <div class="container-fluid">
              <div class="navbar-header">
                  <!--<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-fixed-top .navbar-collapse">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>-->
                  <a class="navbar-brand" href="">Image Gallery</a>

                
                  
                  <!--<div id="displayCredentials" runat="server" />-->
                  <form runat="server" class="pull-right">
                    <asp:Button id="cmdSignOut" text="Sign Out" runat="server" onClick="SignOut" />
                  </form>
                  <span class="navbar-brand pull-right">Welcome</span>
                 
              </div>

          </div>
      </div>
      <div id="container" class="container-fluid">
            <!-- First item to be sure isotope works correctly-->
        <div class="box isotope-item"><a href="images/2015/IMG_9296-s.jpg " data-lightbox=" images/2015/IMG_9296-s.jpg " data-title="undefined "><img class="lazy" src="images/2015/IMG_9296-s.jpg" data-original="images/2015/IMG_9296-s.jpg" width="230" height="300" style="width: 230px; height: 300px; display: inline;"></a></div>
                
      </div>


      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      <!-- Bootstrap JS is not required, but included for the responsive demo navigation and button states -->

      <script src="http://www.appelsiini.net/projects/lazyload/jquery.lazyload.js"></script>
      <script src="http://isotope.metafizzy.co/v1/jquery.isotope.min.js"></script>
      <script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.1.0/bootstrap.min.js"></script>
      <script src="js/main.js"></script>
      <script src="js/lightbox.min.js"></script>
    </body> 
</html>

