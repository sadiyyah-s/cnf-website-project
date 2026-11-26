document.body.insertAdjacentHTML('afterbegin',`
    <div class="header">
        <img src="images/logo.png">
        <h3>
            <span class="color1">Communities </span>
            <span class="color2">Network </span>
            <span class="color3">Foundation</span>
        </h3>

        <div class="menu">
            <input type="checkbox" id="checkbox1" class="checkbox1">

            <label for="checkbox1">
                <div class="button button1">
                    <span class="bar bar1"></span>
                    <span class="bar bar2"></span>
                    <span class="bar bar3"></span>
                    <!-- Hidden width controller that expands the button layout when open -->
                    <span class="size-lock-track">Mailing-list</span>
                </div>
            </label>

            <ul class="menu-list">
                <a href="index.html"><li>Home</li></a>
                <a href="finance.html"><li>Finance</li></a>
                <a href="survey.html"><li>Survey</li></a>
                <a href="template.html"><li>Templates</li></a>
                <a href="mailing-list.html"><li>Mailing-list</li></a>
                <a href="about.html"><li>About Us</li></a>
                <a href="topic.html"><li>Topics</li></a>
            </ul>
        </div>
    </div>
    <hr>
`);

const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const menuToggle = document.querySelector(".menu .button");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuList.classList.toggle("active");
});
