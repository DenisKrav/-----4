function task()
{
    var roles = prompt("Введіть ролі:");
    var arrRoles = roles.split(/\.|\,|\?|\!|\:|\;|\?|\||\\|\/|\s|\'|\"/);
    arrRoles = arrRoles.filter((item, index) => arrRoles.indexOf(item) === index);

    var text = prompt("Введіть текст:")
    var arrText = text.split("\n");

    var editedText = "";
    for(var i = 0; i < arrRoles.length; i++)
    {
        editedText += arrRoles[i] + ":\n";
        for(var j = 0; j < arrText.length; j++)
        {
            if(arrText[j].startsWith(arrRoles[i]))
            {
                arrText[j] = arrText[j].substring(arrRoles[i].length + 2);
                editedText += (j + 1) + ") " + arrText[j] + "\n";
            }
        }
        editedText += "\n";
    }
    alert(editedText);

}