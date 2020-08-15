

const subjects = [
    
    "Ciência de dados",
    "Redes de computadores",
    "Linguagem de programação",
    "Cálculo Aplicado",
    "Banco de dados",
    "Programação para Web",
    "P.O.O (Java)",
    "Engenharia de Software",
    "Sistemas Operacionais",
]

const weekdays = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}


function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60 ) + minutes)
}


module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes

}