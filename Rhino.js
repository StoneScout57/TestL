function show(hidden) 
{
    var elem = document.getElementById(hidden);
    if (elem)
        elem.style.display = "block";
}
function hide(hidden) 
{
    var elem = document.getElementById(hidden);
    if (elem)
elem.style.display = "none";}
function check()
{if (Rhino.ansr.value == "Павия")
        alert("Правильно");
else alert("Неправильно");}