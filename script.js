function positions (firstPlace, secondPlace, lastPlace) {
    let competidores = [firstPlace, secondPlace, lastPlace]
    competidores[1] = lastPlace
    competidores[2] = secondPlace
        if (competidores[0] == firstPlace || competidores[0] == secondPlace || competidores[0] == lastPlace) {
            console.log("1ª - Colocado " + competidores[0])
        }
        if (competidores[1] == firstPlace || competidores[1] == secondPlace || competidores[1] == lastPlace) {
            console.log("2ª - Colocado " + competidores[1])
        }
        if (competidores[2] == firstPlace || competidores[2] == secondPlace || competidores[2] == lastPlace) {
            return console.log("3ª - Colocado " + competidores[2])
        }
}

positions("Rafael", "Manoel", "Daniel")