function RemoveSpaces(Eingvar) {
  var wovar = Eingvar;
  if (wovar.length != 0) {
    while (wovar.indexOf('  ') != -1) {
      var inof = wovar.indexOf('  ');
      wovar = wovar.substring(0, inof) + wovar.substring(inof + 1, wovar.length);
    }
    if (wovar.charAt(0) == " ") {
      wovar = wovar.substring(1, wovar.length);
    }
    if (wovar.charAt(wovar.length - 1) == " ") {
      wovar = wovar.substring(0, wovar.length - 1);
    }
  }
  return wovar;
}

function chkFormular() {
  document.SDaten.Name.value = RemoveSpaces(document.SDaten.Name.value);
  if (document.SDaten.Name.value == "") {
    alert("Bitte einen Namen eingeben!");
    document.SDaten.Name.focus();
    return false;
  }
  var chkZ = 1;
  var lucke = 0;
  for (i = 0; i < document.SDaten.Name.value.length; ++i) {
    if ((document.SDaten.Name.value.charAt(i) < "a"
        || document.SDaten.Name.value.charAt(i) > "z")
        && (document.SDaten.Name.value.charAt(i) < "A"
        || document.SDaten.Name.value.charAt(i) > "Z")
        && (document.SDaten.Name.value.charAt(i) != " "))
      chkZ = -1;
    if (document.SDaten.Name.value.charAt(i) == " ")
      ++lucke;
  }
  if (chkZ == -1) {
    alert("Der Name enth�lt ung�ltige Zeichen!");
    document.SDaten.Name.focus();
    return false;
  }
  if (lucke == 0) {
    alert("Der Name ist nicht Vollst�ndig!");
    document.SDaten.Name.focus();
    return false;
  }
  document.SDaten.UserN.value = RemoveSpaces(document.SDaten.UserN.value);
  if (document.SDaten.UserN.value == "") {
    alert("Bitte einen Benutzernamen eingeben!");
    document.SDaten.UserN.focus();
    return false;
  }
  if (document.SDaten.UserN.value.length < 3) {
    alert("Der Benutzername muss mindestens 3 Zeichen haben!");
    document.SDaten.UserN.focus();
    return false;
  }
  var chkZ = 1;
  for (i = 0; i < document.SDaten.UserN.value.length; ++i)
    if (document.SDaten.UserN.value.charAt(i) < "a"
        || document.SDaten.UserN.value.charAt(i) > "z")
      chkZ = -1;
  if (chkZ == -1) {
    alert("Der Benutzername enth�lt Gro�buchstaben oder ung�ltige Zeichen!");
    document.SDaten.UserN.focus();
    return false;
  }
  if (document.SDaten.kg.selectedIndex < 1) {
    alert("Bitte eine kgruppe w�hlen!");
    document.SDaten.kg.focus();
    return false;
  }
  if (document.SDaten.Passwd.value == "") {
    alert("Bitte ein Passwort eingeben!");
    document.SDaten.Passwd.focus();
    return false;
  }
  if (document.SDaten.Passwd.value.length < 4) {
    alert("Das Passwort hat weniger als 4 Zeichen!");
    document.SDaten.Passwd.focus();
    return false;
  }
  if (document.SDaten.Passwd.value != document.SDaten.Passwda.value) {
    alert("Die beiden Passw�rter sind nicht identisch!");
    document.SDaten.Passwd.focus();
    return false;
  }
}


