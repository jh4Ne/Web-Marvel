
const timeStamp ='1642343735';
const apiKey ='3363c3c53ffcc68e25b14627750430b0';
const md5 ='3AE88417D15ACFFB063AC14948FE2A9C';
fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=$(timeStamp)&apiKey=$(apiKey)&hash=$(md5)`)
.then((Response)=>{
    return Response.json();
})
.then((jsonParsed)=>{
    const divHero = document.querySelector('#marvel-row');
    jsonParsed.data.results.forEach(element => {
        const scrImage = element.thumbnail.path+'.'+element.thumbnail.extension
        const nameHero = element.name
        createDivHero(scrImage,nameHero,divHero)
    });
    console.log(jsonParsed);
})
function createDivHero(srcImage,nameHero,divToAppend){
    const divPai =  document.createElement('div')
    const divFilho= document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent=nameHero
    img.src =srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add("personagem")
}

const timeStamp = '1642343735';
const apiKey = '3363c3c53ffcc68e25b14627750430b0';
const md5 = '3AE88417D15ACFFB063AC14948FE2A9C';
fetch(`https://gateway.marvel.com:443/v1/public/characters/1%2C2%2C3%2C3%2C4%2C5%2C6/comics?ts=$(timeStamp)&apiKey=$(apiKey)&hash=$(md5)`)
    .then((Response) => {
        return Response.json();
    })
    .then((jsonParsed) => {
        const divHerocomic = document.querySelector('#comic-marvel-row');
        jsonParsed.data.results.forEach(element => {
            const scrImagecomic= element.thumbnail.path + '.' + element.thumbnail.extension
            const nameHerocomic = element.name
            createDivHero(scrImagecomic, nameHerocomic, divHerocomic)
        });
        console.log(jsonParsed);
    })
function createDivHero(scrImagecomic, nameHerocomic, divToAppend) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = nameHerocomic
    img.src = scrImagecomic

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add("personagem")
}