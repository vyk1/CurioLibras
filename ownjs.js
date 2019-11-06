function curiosidades() {
    alert("Ops")

    frases = ["Você sabia que 90% dos sites não são acessíveis para pessoas surdas?",
        "Você sabia que nem todas as pessoas que possuem deficiência auditiva são chamados de surdos e nem todo surdo se identifica como deficiente auditivo",
        "Você sabia que a LIBRAS não é universal?",
        "Você sabia que surdo-mudo é um termo incorreto?",
        "Você sabia que acessibildade em LIBRAS é obrigatório devido a Lei Brasileira de Inclusão (LBI)",
        "Você sabia que LIBRAS tem sotaque?",
    ]

    let num = Math.floor(Math.random() * frases.length - 1) + 1

    alert(num + 1 + " " + frases[num])
}