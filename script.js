var accord = document.getElementsByClassName('accordian');
var lastOpened = [];

for (let i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click', function() {

        this.classList.toggle('active');

        var Info = this.nextElementSibling;
        Info.classList.toggle('active');

        lastOpened = lastOpened.filter(index => index !== i);

        if (this.classList.contains('active')) {
            lastOpened.push(i);
        }

        document.querySelector('.Centraliser').classList.remove(
            'colour-1', 'colour-2', 'colour-3'
        );

        document.body.classList.remove(
            'colour-1', 'colour-2', 'colour-3'
        );

        if (lastOpened.length > 0) {
            let latest = lastOpened[lastOpened.length - 1];
            let colour = `colour-${(latest % 3) + 1}`;

            document.querySelector('.Centraliser').classList.add(colour);
            document.body.classList.add(colour);
        }
    });
}
