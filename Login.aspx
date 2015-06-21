<%@Page Language="VB" %>
<%@Import Namespace="System.Web.Security" %>
<script language="VB" runat="server">
Sub ProcessLogin(objSender As Object, objArgs As EventArgs)
  If FormsAuthentication.Authenticate(txtUser.Text, txtPassword.Text) Then
     FormsAuthentication.RedirectFromLoginPage(txtUser.Text, chkPersistLogin.Checked)
  Else
     ErrorMessage.InnerHtml = "<b>Something went wrong...</b> please re-enter your credentials..."
  End If
End Sub
</script>


<html>
    <head>
      <title>Login Form</title>

        <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
        <meta charset="utf-8">
        <title>Image Gallery</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/styles.css">
    </head>

    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Welcome</a>
            </div>
          </div>
        </nav>
      <div class="container">
          <div class="">
              <form runat="server">

                  <div class="form-group">
                      <label for="exampleInputEmail1">Username</label>
                      <asp:TextBox Id="txtUser"  runat="server" cssClass="form-control" />
                  </div>


                  <div class="form-group">
                      <label for="txtPassword">Password</label>
                      <asp:TextBox Id="txtPassword" TextMode="Password" runat="server" cssClass="form-control" />
                  </div>
                  
                  <!--<div class="form-group">
                      <label for="txtPassword">Password</label>
                      <asp:CheckBox Id="chkPersistLogin"  runat="server" cssClass="form-control" />
                  </div>-->

                  <div class="form-group">
                      <asp:Button CssClass="btn btn-default" Id="cmdLogin" OnClick="ProcessLogin" Text="Login" runat="server" />
                  </div>

                  <div class="form-group">
                    <div id="ErrorMessage" runat="server" />
                  </div>

              </form>

          </div>

      </div>


    </body>
</html>