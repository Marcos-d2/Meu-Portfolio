// Configurando os dados para o gráfico de habilidades
const skillsCtx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(skillsCtx, {
    type: 'doughnut',
    data: {
        labels: ['Python', 'SQL', 'Machine Learning', 'Análise de Dados', 'Power BI'],
        datasets: [{
            data: [30, 20, 25, 15, 10],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});

// Configurando os dados para o gráfico de evolução dos projetos
const projectsCtx = document.getElementById('projectsChart').getContext('2d');
const projectsChart = new Chart(projectsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Projetos Completados',
            data: [1, 2, 3, 4, 6, 8, 10, 12, 15, 18, 20, 23],
            borderColor: '#4e73df',
            backgroundColor: 'rgba(78, 115, 223, 0.5)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade de Projetos'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Mês'
                }
            }
        }
    }
});
