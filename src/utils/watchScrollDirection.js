
export default function watchScrollDirection(pageDown, pageUp) {
    let delta = 0;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > delta) {
            pageDown();
        } else {
            pageUp();
        }

        delta = window.pageYOffset;
    });
}