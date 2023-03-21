var accessibilityColours = false;

function shrinkTitle()
{
    setTimeout(()=>{
        document.getElementById("title").style="height: 12vh; font-size: 4rem;";
        document.getElementById("accessButton").style="opacity: 100%";
    }, 2000)
}


function toggleColors()
{
    if (accessibilityColours)
    {
    document.body.style = "var(--back)"
    document.getElementById("accessButton").style="opacity: 100%; color: var(--safe)";
    document.getElementById("accessButton").innerHTML = "Switch To Calmer Colours"
    accessibilityColours = false
    }
    else
    {
    document.body.style = "background-color: #6f6f6f"
    document.getElementById("accessButton").style="opacity: 100%; color: var(--back)";
    document.getElementById("accessButton").innerHTML = "Switch To Brighter Colours"
    accessibilityColours = true
    }
}