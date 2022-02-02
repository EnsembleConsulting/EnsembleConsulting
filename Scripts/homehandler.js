function scroller(event) {
    const section = document.getElementById(event);

    section.scrollTop = section.scrollHeight;
    let height = section.scrollHeight + "";
    console.log(parseInt(height), event);
    window.scroll(0, parseInt(height));

}

function SendDetails(event) {
    const Email = $('#Email').val();
    R
    const Name = $('#Name').val();
    const Organisation = $('#Organisation').val();
    const Telephone = $('#Telephone').val();
    const Date = $('#PreferredDate').val();
    const period = $('#period').val();
    console.log(Email, Name, Organisation, Date, period);
}