// Event listener para o botão de diagnóstico
document.getElementById('diagnose-btn').addEventListener('click', function() {
    // Obter o formulário de diagnóstico
    const form = document.getElementById('diagnostic-form');

    // Obter os valores dos sintomas selecionados pelo usuário
    const symptoms = {
        fever: form.elements['fever'].value,
        cough: form.elements['cough'].value,
        headache: form.elements['headache'].value,
        sore_throat: form.elements['sore_throat'].value,
        muscle_pain: form.elements['muscle_pain'].value,
        fatigue: form.elements['fatigue'].value,
        breathing_difficulty: form.elements['breathing_difficulty'].value,
        nausea: form.elements['nausea'].value,
        loss_of_smell: form.elements['loss_of_smell'].value,
        loss_of_taste: form.elements['loss_of_taste'].value
    };

    // Variável inicial de diagnóstico
    let diagnosis = "Os sintomas não correspondem a uma doença conhecida.";

    // Lógica de diagnóstico com base nos sintomas selecionados
    if (symptoms.fever === 'yes' && symptoms.cough === 'yes' && symptoms.breathing_difficulty === 'yes') {
        diagnosis = "Você pode estar com COVID-19. Consulte um médico imediatamente.";
    } else if (symptoms.fever === 'yes' && symptoms.headache === 'yes' && symptoms.nausea === 'yes') {
        diagnosis = "Você pode estar com dengue. Consulte um médico.";
    } else if (symptoms.sore_throat === 'yes' && symptoms.cough === 'yes' && symptoms.muscle_pain === 'yes') {
        diagnosis = "Você pode estar com gripe. Descanse e se hidrate.";
    } else if (symptoms.fever === 'yes' && symptoms.fatigue === 'yes' && symptoms.loss_of_smell === 'yes') {
        diagnosis = "Pode ser COVID-19. Monitore seus sintomas e consulte um médico se necessário.";
    } else if (symptoms.cough === 'yes' && symptoms.breathing_difficulty === 'yes') {
        diagnosis = "Você pode estar com bronquite. Consulte um médico para avaliação.";
    } else if (symptoms.nausea === 'yes' && symptoms.loss_of_taste === 'yes') {
        diagnosis = "Pode ser uma infecção viral. Descanse e consulte um médico se os sintomas persistirem.";
    } else if (symptoms.fever === 'yes' && symptoms.muscle_pain === 'yes' && symptoms.nausea === 'yes') {
        diagnosis = "Você pode estar com leptospirose. Procure um médico imediatamente.";
    }

    // Exibir o diagnóstico em um alerta
    alert(diagnosis);

    // Limpar os campos do formulário
    form.reset();
});

// Event listener para o scroll da janela
window.addEventListener('scroll', function() {
    // Obter o elemento de navegação lateral
    var scrollLado = document.getElementById('scrollLado');
    // Obter a posição de scroll atual da janela
    var scrollPosition = window.scrollY;
    
    // Lógica para alterar a opacidade do elemento de navegação lateral baseado no scroll
    if (scrollPosition > 50) { 
        scrollLado.style.opacity = '0';
    } else {
        scrollLado.style.opacity = '1';
    }
});
