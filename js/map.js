let storage = JSON.parse(localStorage.getItem('gameStorage'));
let level = storage['level'];

for ( i=3; i>=level; i--)
{
    if(i>=level)
    {
        document.getElementById("unlock"+i).style.display ="none";

    }
}

function checkLevel(id)
{

    if (id<=level)
    {
        window.open('level_1.html','_blank');

    }
    else
    {
        alert("you have not unlocked level"+id+"yet");
    }

}