
function scroller(event) {
    const section = document.getElementById(event);

    section.scrollTop=section.scrollHeight;
    let height = section.scrollHeight+"";
    console.log( parseInt(height),event);
    window.scroll(0,parseInt(height));

}