function fibonacci_linear(entrada) {
	if (/^\d+$/.test(entrada)) {
		let atual = 1;
		let anterior = 0;
		let salva;
		for(let i =1;i < entrada;i++){
			salva = atual;
			atual = atual+anterior;
			anterior = salva;
		}
		salva = entrada > 0 ? atual : 0 ;
		/*console.log(salva);*/
		return salva;
	}
	return"entrada invalida";
}


function fibonacci_recursiva(entrada,atual = 1,anterior=0){
	if (/^\d+$/.test(entrada)) {	
		let salva = atual;
		atual = anterior;
		if (entrada >= 1){
			entrada-=1;
			atual = salva+anterior;
			anterior = salva;
			return fibonacci_recursiva(entrada,atual,anterior)
		}else{
			/*console.log(atual);*/
			return atual;
		}
		return 0;
	}
	/*console.log("entrada invalida");*/
	return"entrada invalida";
}


function primos_linear(entrada){
	let lista = [];
	if (/^\d+$/.test(entrada)) {
		for(let i = entrada; i>0;i--){
			for(let j = 2; j<=i ;j++){
				if (j != i){
					if(/^\d+$/.test(i/j)){
						break;
					}
				}else{
					lista.push(i);
				}
			}	
		}return lista;
	}else{
		return"entrada invalida";
	}
}

function primos_recursiva (entrada,lista=[]){
	if (/^\d+$/.test(entrada)) {
		for(let i = 2;i <= entrada;i++){
			if (entrada != i){
				if(/^\d+$/.test(entrada/i)){
							break;
				}
			}else{
				lista.push(entrada);
			}
		}
		entrada--;
		if(entrada > 1){
			return primos_recursiva (entrada,lista);
		}else{
			return lista;
		}		
	}else{
		return"entrada invalida";
	}	
}