function writeHTMLasJS(){
document.write("<div class=\"navBar\">");
document.write("        <a href=\"index.html\"><div class=\"navBarTitle\"><img src=\"assets\/logo.png\"><\/div><\/a>");
document.write("        <div class=\"navBarItems\">");
document.write("            <div><a class=\"navLink\" href=\"index.html\">Home<\/a><\/div>");
document.write("            <div><a class=\"navLink\" href=\"about-us.html\">Members<\/a><\/div>");
document.write("            <div><a class=\"navLink\" href=\"auditions.html\">Auditions<\/a><\/div>");
document.write("            <div class=\"navLink-dropdown\">");
document.write("                Events");
document.write("                <div class=\"dropdown-content\">");
document.write("                    <a href=\"events.html\">Events Calendar<\/a>");
document.write("                    <a href=\"concerts.html\">Concerts<\/a>");
document.write("                    <a href=\"cpw-fwacc.html\">CPW 2023<\/a>");
document.write("                  <\/div>");
document.write("            <\/div>");
document.write("            <div><a class=\"navLink\" href=\"contact.html\">Contact<\/a><\/div>             ");
document.write("        <\/div> ");
document.write("    <\/div>");
document.write("");
document.write("    <div id=\"mobileLogo\">");
document.write("        <a href=\"index.html\"><img src=\"assets\/logo-round.png\"><\/a>");
document.write("    <\/div>");
document.write("");
document.write("    <nav role=\"navigation\">");
document.write("        <div id=\"menuToggle\">");
document.write("          <input type=\"checkbox\" \/>");
document.write("          <span><\/span>");
document.write("          <span><\/span>");
document.write("          <span><\/span>");
document.write("          <ul id=\"menu\">");
document.write("            <a href=\"index.html\"><li>Home<\/li><\/a>");
document.write("            <a href=\"about-us.html\"><li>Members<\/li><\/a>");
document.write("            <a href=\"events.html\"><li>Events<\/li><\/a>");
document.write("            <a href=\"concerts.html\">Concerts<\/a>");
document.write("            <a href=\"cpw-fwacc.html\"><li>CPW 2023<\/li><\/a>");
document.write("            <a href=\"contact.html\"><li>Contact<\/li><\/a>  ");
document.write("          <\/ul>");
document.write("        <\/div>");
document.write("      <\/nav>");
document.write("      <\/nav>");
}
writeHTMLasJS();

const nav = document.querySelector(".navBar");
      const mobNav = document.querySelector("#mobileLogo")
      let lastScrollY = window.scrollY;
      window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
          nav.classList.add("nav_hidden")
          mobNav.classList.add("nav_hidden")
        } else{
          nav.classList.remove("nav_hidden")
          mobNav.classList.remove("nav_hidden")
        }
      lastScrollY = window.scrollY
      });