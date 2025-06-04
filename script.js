    function changeCSS() {
        let linkElement = document.getElementById("path");
        let currentHref = linkElement.getAttribute("href");

        if (currentHref === "style-light.css") {
            linkElement.setAttribute("href", "style-dark.css");
        } else {
            linkElement.setAttribute("href", "style-light.css");
        }
      }