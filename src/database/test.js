const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    //inserrir dados

    proffyValue = {
        name: "Sergio Luis Antonello",
        avatar: "https://github.com/diego3g.png",
        whatsapp: "899982980",
        bio:"Entusiasta das melhores metodologias em estrutura de dados na linguagem C.Experiência na área de Ciência da Computação, com ênfase em linguagens de programação. Atua principalmente com desenvolvimento de sistemas e geoprocessamento.",
    }

    classValue = {
        subject: "1",
        cost: "50",
        
    }

    classScheduleValues = [
        //vira pelo banco de dados
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar dados inseridos

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes. * ,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "520"
            AND class_schedule.time_to > "520"
    `)

    //console.log(selectClassesSchedules)

})