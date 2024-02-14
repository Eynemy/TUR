function obliczCalkowityKoszt() {
    let kosztLotu = document.getElementById('koszt_lotu').value;
    let kosztPociagu = document.getElementById('koszt_pociagu').value;
    let kosztZakwaterowania = document.getElementById('koszt_zakwaterowania').value;
    let liczbaOsob = document.getElementById('liczba_osob').value;
    let kosztTransportu = document.getElementById('koszt_transportu').value;

    let calkowityKoszt = (parseFloat(kosztLotu) + parseFloat(kosztPociagu) + (parseFloat(kosztZakwaterowania) / parseFloat(liczbaOsob))+ parseFloat(kosztTransportu));
    document.getElementById('calkowity_koszt').textContent = 'Całkowity koszt na osobę wynosi: ' + calkowityKoszt.toFixed(2) + ' PLN';
}