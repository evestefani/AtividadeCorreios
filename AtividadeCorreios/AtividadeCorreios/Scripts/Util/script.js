$(document).ready(
    function () {
        $('input[type=button]').click(function () {

            var obj = {
                nCdServico: $('input[name="servicos"]').val(),
                sCepOrigem: $('input[name="cepori"]').val(),
                sCepDestino: $('input[name="cepdes"]').val(),
                nVlPeso: $('input[name="peso"]').val(),
                nCdFormato: $('input[name="formato"]').val(),
                nVlComprimento: $('input[name="comprimento"]').val(),
                nVlAltura: $('input[name="altura"]').val(),
                nVlLargura: $('input[name="largura"]').val(),
                sCdMaoPropria: $('input[name="maopropria"]').val(),
                nVlValorDeclarado: $('input[name="valordeclarado"]').val(),
                sCdAvisoRecebimento: $('input[name="avisorecebimento"]').val(),
                

            }
            $.post("http://usysweb.com.br/api/correiosambev.php?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=70002900&sCepDestino=04547000&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3", obj, function (data) {
                console.log(data);
            });
        });
       
