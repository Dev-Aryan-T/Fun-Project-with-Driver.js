function myFunction() {
    const driver = window.driver.js.driver;
    const driverobj = driver();

    driverobj.highlight({
        element: '.btn1',
        popover: {
            title: "Best desicion of your life I love you too!",
            description: "This is just a joke and fun page for testing driver javascript code",
        },
    });
};

const a =  document.getElementById('btn2');
a.addEventListener('mouseover',function(){
    const viewportwidth = window.innerWidth;
    const viewportheight = window.innerHeight;
    const randomX = Math.floor(Math.random() * (viewportwidth - a.offsetWidth));
    const randomY = Math.floor(Math.random() * (viewportheight - a.offsetHeight));

    // Apply the new position to the button
    a.style.position = 'absolute';
    a.style.left = randomX + 'px';
    a.style.top = randomY + 'px';


});

function myFunction2(){
    const driver = window.driver.js.driver;
    const dobj = driver();
    dobj.highlight({
        element: '.btn2',
        popover: {
            title: "Thukrake mera pyar mera intakam dekheki",
            description: "Lol this is just joke hai",
        }
    });
}