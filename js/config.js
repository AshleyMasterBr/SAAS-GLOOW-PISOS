// ==========================================
// ARQUIVO GESTOR DE TRÁFEGO E CONFIG. GERAIS
// ==========================================

const CONFIG = {
    // 1. DADOS DA EMPRESA E ATENDIMENTO
    empresa: {
        nome1: "GLOW",
        nome2: "PISOS", // Aparece em destaque (com a cor primária)
        whatsapp: "5511915853963" // Apenas números
    },

    // 2. OPÇÕES DE PISOS E PREÇOS
    pisos: [
        // VINÍLICOS
        { categoria: "Pisos Vinílicos", nome: "Vinílico 2mm (+ rodapé 7cm)", preco: 144.90 },
        
        // LAMINADOS
        { categoria: "Laminados", nome: "Eucafloor (+ rodapé)", preco: 119.90 }
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
        { titulo: "Rodapé Incluso (até 7cm)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Materiais Base (Mantas, Colas, Massas, Acabamentos)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Mão de Obra de Preparação e Instalação", subtitulo: "INCLUSO", strike: "", gratis: true }
    ],

    // 5. OBSERVAÇÕES E DISCLAIMER NO RODAPÉ DO RESULTADO
    disclaimer: "*Valor estimado para ambientes a partir de 20m². O rodapé incluso é de até 7cm. Visita técnica necessária para validar projeto."
};
