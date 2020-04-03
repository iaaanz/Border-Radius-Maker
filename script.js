function copiar() {
    var text_val = document.getElementById('codigo');
    text_val.select();
    document.execCommand("Copy");
    alert("CSS Copiado!");
}

function applyBorder() {
    var borderSurface = document.getElementById('surface').style;
    var borderRadius = document.getElementById('surface').style.borderRadius;
    var input_tl = document.getElementById("input_tl").value;
    var input_tr = document.getElementById("input_tr").value;
    var input_bl = document.getElementById("input_bl").value;
    var input_br = document.getElementById("input_br").value;
    var exibir_curto = 'border-radius: ';
    var exibir_tl    = 'border-top-left-radius: ';
    var exibir_tr    = 'border-top-right-radius: ';
    var exibir_bl    = 'border-bottom-left-radius: ';
    var exibir_br    = 'border-bottom-right-radius: ';

    borderSurface.borderTopLeftRadius = input_tl + 'px';
    borderSurface.borderTopRightRadius = input_tr + 'px';
    borderSurface.borderBottomRightRadius = input_br + 'px';
    borderSurface.borderBottomLeftRadius = input_bl + 'px';

    if (input_tl === "") {
        borderSurface.borderTopLeftRadius = 0;
    }
    if (input_tr === "") {
        borderSurface.borderTopRightRadius = 0;
    }
    
    if (input_bl === ""){
        borderSurface.borderBottomLeftRadius = 0;
    }
    
    if (input_br === "") {
        borderSurface.borderBottomRightRadius = 0;
    }

    console.log()
    codigo = 
        exibir_curto + borderRadius + ";\n" +
        exibir_tl + borderSurface.borderTopLeftRadius + ";\n" +
        exibir_tr + borderSurface.borderTopRightRadius + ";\n" +
        exibir_bl + borderSurface.borderBottomLeftRadius + ";\n" +
        exibir_br + borderSurface.borderBottomRightRadius + ";\n"
        ;

    document.getElementById("codigo").innerHTML = codigo;
}

setInterval(tudo, 100)

function tudo() {

    applyBorder();
}
