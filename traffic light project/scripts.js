let currentLight=0;
let timer=null;
var running=false;

function changeLights()
{
    resetLights();
    switch(currentLight)
    {
        case 0:
            document.getElementById('red').style.backgroundColor='red';
            currentLight=1;
            break;
        case 1:
            document.getElementById('yellow').style.backgroundColor='yellow';
            currentLight=2;
            break;
        case 2:
            document.getElementById('green').style.backgroundColor='green';
            currentLight=0;
            break;
    }
    if(running)
    {
        timer=setTimeout(changeLights, 3000);
    }
}

function resetLights()
{
    document.getElementById('red').style.backgroundColor='#333';
    document.getElementById('yellow').style.backgroundColor='#333';
    document.getElementById('green').style.backgroundColor='#333';
}

function toggleTrafficLight()
{
    const button=document.getElementById('button');
    if(!running)
    {
        running=true;
        button.textContent='OFF';
        changeLights();
    }else
    {
        running=false;
        button.textContent='ON';
        clearTimeout(timer);
        resetLights();
    }
}