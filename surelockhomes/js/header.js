const Header= {
    onMenuClicked: null,

    init: function () {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', function () {
            document.body.classList.toggle('mobile-menu-open');
        });

        document.addEventListener('click', function (event) {
            if(!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                document.body.classList.remove('mobile-menu-open');
            }
        });
    },

    menuClicked: function () {
        console.log('menu clicked');

        if(typeof this.onMenuClicked === 'function') {
            this.onMenuClicked()
        }
    }
};

Header.init()