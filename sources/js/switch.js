
function logoutFunction () 
{
    var logoutPopup = document.getElementById('logout_Popup');
    logoutPopup.classList.remove('div_Away');
    logoutPopup.classList.add('div_Show');

}

function logoutNo() {
    var logoutpopup = document.getElementById('logout_Popup');
    logoutpopup.classList.remove('div_Show');
    logoutpopup.classList.add('div_Away');
}

function logoutYes()
{
    alert('Logout later')
}

function docMoveLeft() {
    var imgpage = document.getElementById('imgContainer');
    var reportpage = document.getElementById('reportPage');
    var popup = document.getElementById('disp_move_error');
    var imgLeft = document.getElementById('leftIMG');
    var imgRight = document.getElementById('rightIMG');
    if(imgpage.classList.contains('div_Show'))
    {
        console.log('Kan niet verder!');

    } else if (reportpage.classList.contains('div_Show'))
    {
        reportpage.classList.remove('div_Show');
        reportpage.classList.add('div_Away');
        imgpage.classList.remove('div_Away');
        imgpage.classList.add('div_Show');
        imgLeft.src = "sources/afb/arrow1_gray.png";
        imgRight.src = "sources/afb/arrow2.png";
    }
}

function docMoveRight() {
    var imgpage = document.getElementById('imgContainer');
    var reportpage = document.getElementById('reportPage');
    var popup = document.getElementById('disp_move_error');
    var imgLeft = document.getElementById('leftIMG');
    var imgRight = document.getElementById('rightIMG');
    if(imgpage.classList.contains('div_Show'))
    {
        imgpage.classList.remove('div_Show');
        imgpage.classList.add('div_Away');
        reportpage.classList.remove('div_Away')
        reportpage.classList.add('div_Show');
        imgLeft.src = "sources/afb/arrow1.png";
        imgRight.src = "sources/afb/arrow2_gray.png";
    } else if (reportpage.classList.contains('div_Show'))
    {
        console.log('Kan niet verder');
    }
}

function errhandelendpage () {
    var disperrokay = document.getElementById('disp_move_error');
    disperrokay.classList.remove('div_Show');
    disperrokay.classList.add('div_Away');
}

