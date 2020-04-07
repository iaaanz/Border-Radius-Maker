    setInterval(applyBorder, 100);
    function applyBorder() {
        var borderRadiusVisivel = document.getElementById('surface_visivel').style;
        var borderRadiusOculto = document.getElementById('surface_oculto').style;
        var allBROculto = document.getElementById('surface_oculto').style.borderRadius;
        var input_tl = document.getElementById("input_tl").value;
        var input_tr = document.getElementById("input_tr").value;
        var input_bl = document.getElementById("input_bl").value;
        var input_br = document.getElementById("input_br").value;

        borderRadiusOculto.borderTopLeftRadius = input_tl + 'px';
        borderRadiusOculto.borderTopRightRadius = input_tr + 'px';
        borderRadiusOculto.borderBottomRightRadius = input_br + 'px';
        borderRadiusOculto.borderBottomLeftRadius = input_bl + 'px';

        if (input_tl === "") {
            borderTopLeft = 
            borderRadiusVisivel.borderTopLeftRadius = 
            borderRadiusOculto.borderTopLeftRadius =
            0 + 'px';
        }else if (input_tl >= 160){ 
            borderTopLeft = borderRadiusVisivel.borderTopLeftRadius = input_tl + 'px';
            borderRadiusVisivel.borderTopLeftRadius = "160px";
        }else{
            borderTopLeft = 
            borderRadiusVisivel.borderTopLeftRadius =  
            input_tl + 'px';
        }

        if (input_tr === "") {
            borderTopRight = 
            borderRadiusVisivel.borderTopRightRadius =
            borderRadiusOculto.borderTopRightRadius =
            0 + 'px';
        }else if (input_tr >= 160){ 
            borderTopRight = borderRadiusVisivel.borderTopRightRadius = input_tr+ 'px';
            borderRadiusVisivel.borderTopRightRadius = "160px";
        }else{
            borderTopRight = 
            borderRadiusVisivel.borderTopRightRadius = 
            input_tr + 'px';
        }

        if (input_br === "") {
            borderBottomRight = 
            borderRadiusVisivel.borderBottomRightRadius = 
            borderRadiusOculto.borderBottomRightRadius =
            0 + 'px';
        }else if (input_br >= 160){ 
            borderBottomRight = borderRadiusVisivel.borderBottomRightRadius = input_br+ 'px';
            borderRadiusVisivel.borderBottomRightRadius = "160px";
        }else{
            borderBottomRight = 
            borderRadiusVisivel.borderBottomRightRadius = 
            input_br + 'px';
        }

        if (input_bl === "") {
            borderBottomLeft = 
            borderRadiusVisivel.borderBottomLeftRadius = 
            borderRadiusOculto.borderBottomLeftRadius =  
            0 + 'px';
        }else if (input_bl >= 160){ 
            borderBottomLeft = borderRadiusVisivel.borderBottomLeftRadius = input_bl+ 'px';
            borderRadiusVisivel.borderBottomLeftRadius = "160px";
        }else{
            borderBottomLeft = 
            borderRadiusVisivel.borderBottomLeftRadius = 
            input_bl + 'px';
        }
        
        codigo = 
            'border-radius: ' + allBROculto + ";\n" +
            'border-top-left-radius: ' + borderTopLeft + ";\n" +
            'border-top-right-radius: ' + borderTopRight + ";\n" +
            'border-bottom-left-radius: ' + borderBottomRight + ";\n" +
            'border-bottom-right-radius: ' + borderBottomLeft + ";\n";
        document.getElementById("codigo").innerHTML = codigo;
    }
    
    function copy() {
        var text_val = document.getElementById('codigo');
        text_val.select();
        document.execCommand("Copy");
        alert("CSS Copied!");
    }