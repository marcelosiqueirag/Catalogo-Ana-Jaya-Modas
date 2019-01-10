var slider = document.getElementById("slider");
var qtdFotos = 3;
var translate = 100 / qtdFotos;
var index = 0;

function avancar() {
    if(index == qtdFotos - 1) {
        index = 0;
        slide(index);
        return;
    }
    index += 1;
    slide(index);
}

function voltar() {
    if(index == 0) {
        index = qtdFotos - 1;
        slide(index);
        return;
    }
    index -= 1;
    slide(index);
}

function slide(i) {
    slider.style.transform = `translateX(-${translate * i}%)`;
    index = i;
    var bolinhaAtiva = document.getElementsByClassName('bolinha--ativa')[0];
    bolinhaAtiva.classList.remove('bolinha--ativa');
    bolinhaAtiva = document.getElementById(`slideshow-bolinha-${index}`);
    bolinhaAtiva.classList.add('bolinha--ativa');
}