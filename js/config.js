// ==========================================
// ARQUIVO GESTOR DE TRÁFEGO E CONFIG. GERAIS
// ==========================================

const CONFIG = {
    // 1. DADOS DA EMPRESA E ATENDIMENTO
    empresa: {
        nome1: "REAL",
        nome2: "PISOS", // Aparece em destaque (com a cor primária)
        whatsapp: "553194699586" // Apenas números (mantenha ou altere logo que tiver o link)
    },

    // 2. OPÇÕES DE PISOS E PREÇOS
    pisos: [
        // LAMINADOS
        { categoria: "Laminados", nome: "Floorest", preco: 119.90 },
        { categoria: "Laminados", nome: "Linha Première (Quick Step)", preco: 149.90 },
        { categoria: "Laminados", nome: "Linha Smart (Quick Step)", preco: 169.90 },
        { categoria: "Laminados", nome: "Linha Eligna Wide / Vision (Quick Step)", preco: 194.90 },
        { categoria: "Laminados", nome: "Linha Impressive (Quick Step)", preco: 249.90 },
        { categoria: "Laminados", nome: "Eucafloor Prime Click", preco: 129.90 },
        
        // VINÍLICOS
        { categoria: "Pisos Vinílicos", nome: "Linha Sofisticato (Ruffino)", preco: 184.90 }
    ],

    // 3. OPÇÕES DE PISO ATUAL (Select 1)
    opcoesPisoAtual: [
        { valor: "Contrapiso", texto: "Contrapiso (Cimento)" },
        { valor: "Cerâmica", texto: "Cerâmica / Porcelanato" },
        { valor: "Madeira", texto: "Madeira / Taco" },
        { valor: "Outro", texto: "Outro / Não sei" }
    ],

    // 4. BÔNUS E INCLUSÕES NO ORÇAMENTO
    bonus: [
        { titulo: "Rodapé Padrão 7cm (MDF)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Materiais Base (Mantas, Colas, Massas, Acabamentos)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Mão de Obra de Preparação e Instalação", subtitulo: "INCLUSO", strike: "", gratis: true }
    ],

    // 5. OBSERVAÇÕES E DISCLAIMER NO RODAPÉ DO RESULTADO
    disclaimer: "*Valor estimado para ambientes a partir de 20m². O rodapé incluso é padrão 7cm na cor do piso ou branco. Visita técnica necessária para validar projeto."
};
