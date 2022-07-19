const inserir_produtos = document.querySelector('#produtos')
const btProsseguir = document.querySelector('#botaoProsseguir')
const numero_preço = document.querySelector('#numero-preço')


dbProdutos.forEach(function(produto) {
 let nome_produto = produto.nome;
inserir_produtos.innerHTML += '<option value= "' +nome_produto +'">' +nome_produto +'</option>'

});



btProsseguir.addEventListener("click", function(e){
    e.preventDefault();
    
   let Valor = document.querySelector('#produtoestoque').value;


   const nquandidade = document.querySelector('#quantidade').value;

   const valor_pago = document.querySelector('#valorpago').value;
   const valordado = document.querySelector('#valordado');
   
   const pronatabela = document.querySelector('#pronatabela');
   
   
   const troco_dado = document.querySelector('#troco-dado');

   dbProdutos.forEach(function(produto) {
    if (Valor == produto.nome){
        numero_preço.innerHTML = produto.preço*nquandidade;
        valordado.innerHTML = valor_pago;
        troco_dado.innerHTML = valor_pago-(produto.preço*nquandidade);
        
        pronatabela.innerHTML += '<td>' +produto.nome+ '</td>  <td>' +nquandidade+ '</td> <td>' +(produto.preço*nquandidade)+ '</td> <td><button id="remover">remover</button></td>'
    }
   })
})



