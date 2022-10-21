const ApiCall = async() => {
    let apikey = '584a968330c9a233c596f56784cf5806'
    let apiid = '7ba2100d'
    const res = await fetch (
        `https://api.edamam.com/api/recipes/v2?q=chicken&app_key=${apikey}&_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAQARGJGB2EWa1BxBAYGUXlSB2IQZAQiVwYPRjFGBDFGMlFwVlFTF2RHBzEbMFAhDVcVLnlSVSBMPkd5AAMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&diet=high-fiber&health=kosher&type=public&app_id=${apiid}`

    )
    const data = await res.json()
    console.log(data.hits)
    const dataHits = data.hits
    console.log('this is data hits' , dataHits)

    dataHits.map(data => {
        let test = document.createElement('p')
        let test1 = document.createElement('p')
        document.body.appendChild(test)
        document.body.appendChild(test1)
     
        let dataLabel= data.recipe.label
        let dataHealth= data.recipe.healthLabels
        console.log('this is datalabel', dataLabel)
        console.log('this is datahealth', dataHealth)
        let testText = document.createTextNode(dataLabel)
        let testText1 = document.createTextNode(dataHealth)
        test.appendChild(testText)
        test1.appendChild(testText1)
      
    })
  
return( 
    <div>
        <h1> hello</h1>
    </div>
)
}

export default ApiCall