function Funkcja_wyszukiwarka_hamburger() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput_hamburger');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL_hamburger");
    li = ul.getElementsByTagName('li');
  
    if (filter.length < 2) {
        ul.classList.remove('active');  // Usuwamy klasę 'active'
    } else {
        let count = 0;
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                if (count < 2) {
                    li[i].style.display = "block";
                    count++;
                } else {
                    li[i].style.display = "none";
                }
            } else {
                li[i].style.display = "none";
            }
        }
        if (count > 0) {
            ul.classList.add('active');  // Dodajemy klasę 'active', jeśli są jakiekolwiek wyniki
        } else {
            ul.classList.remove('active');  // Usuwamy klasę 'active', jeśli nie ma wyników
        }
    }
  }
  
  
  document.addEventListener('click', function (event) {
  var isClickInside = document.getElementById('Wyszukiwarka_hamburger').contains(event.target);
  
  if (!isClickInside) {
      var li = document.getElementById("myUL_hamburger").getElementsByTagName('li');
      for (var i = 0; i < li.length; i++) {
          li[i].style.display = "none";
      }
  }
  });