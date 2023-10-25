 class Filme{
    titulo:string;
    ano:number;
    genero:string;

    constructor(titulo:string, ano:number, genero:string){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
    }

    exibirDetalhes():void{    
        console.log(`Titulo:${this.titulo}`)
        console.log(`Ano:${this.ano}`)
        console.log('')
    }
}

class Acao extends Filme {
   
}

class Romance extends Filme{
    
}

const lista : Filme[] = [
    new Romance('Harry Potter', 2000, 'Romance'),
    new Acao('Percy Jackson', 1996, 'Acao')

    
]

lista.forEach(lista => {
    console.log('')
    lista.exibirDetalhes();
})

const recomendar = (genero : string)  : Filme[] => {
    const resultado = lista.filter(filme => filme.genero === genero)
    return resultado;
}
const resposta = recomendar("Romance");
console.log(resposta)

