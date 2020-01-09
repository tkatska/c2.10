const getStats = () => {
    const header = new Headers({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
    })

    const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

    const ES = new EventSource(url, header)

    const progressCats = document.querySelector('.progress-barCats')
    const progressDogs = document.querySelector('.progress-barDogs')
    const progressParrots = document.querySelector('.progress-barParrots')

    const displayError = () => {
        progressCats.textContent = "Some error for cats";
        progressDogs.textContent = "Some error for dogs";
        progressParrots.textContent = "Some error for parrots";
    }

    ES.onerror = () => {
        ES.readyState ? displayError : null;
    }

    ES.onmessage = ({ data }) => {
        const values = JSON.parse(data)
        const totalVotes = values.cats + values.dogs + values.parrots;

        const catsPercentage = Math.round(100 / totalVotes * values.cats)
        progressCats.style.cssText = `width: ${catsPercentage}%`
        progressCats.textContent = `${catsPercentage}%`

        const dogsPercentage = Math.round(100 / totalVotes * values.dogs)
        progressDogs.style.cssText = `width: ${dogsPercentage}%`
        progressDogs.textContent = `${dogsPercentage}%`

        const parrotsPercentage = Math.round(100 / totalVotes * values.parrots)
        progressParrots.style.cssText = `width: ${parrotsPercentage}%`
        progressParrots.textContent = `${parrotsPercentage}%`

    }
}