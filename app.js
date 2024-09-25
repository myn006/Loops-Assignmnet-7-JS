var five = 5;
for (var i = 1; i <= five; i++) {

    for (var j = 1; j <= five - i; j++) {
        document.write("&nbsp;&nbsp;")
    }
    for (var k = 0; k < 2 * i - 1; k++) {
        document.write("*")
    }
    document.write("<br>")

}