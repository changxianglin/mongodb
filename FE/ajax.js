var xhr = new XMLHttpRequest()
xhr.onreadystatechange=function()
{
    if (xhr.readyState==4 && xhr.status==200)
    {
        var data = JSON.parse(xhr.responseText)
        document.body.innerHTML=data.name;
    }
}
xhr.open('get', '/first')
xhr.send()
console.log(xhr.responseText)
