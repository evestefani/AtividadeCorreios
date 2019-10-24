$(document).ready(
    function () {
        $('input[name=BTN]').click(function () {
            
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
            
            $.post("http://usysweb.com.br/api/correiosambev.php?giomar=true", obj, function (data) {
               
                var objeto = JSON.stringify(obj)
                alert(objeto);
            });
            


           /* $.getJSON(options.uri, options.qs, function (data) {

                alert("valor total" + data.cServico.valor + "\n\rPrazo Entrega" + data.cServico.PrazoEntrega +
                    "\n\rValor sem adicionais" + data.cServico.ValorSemAdicionais);

            });*/

        });
                
    });