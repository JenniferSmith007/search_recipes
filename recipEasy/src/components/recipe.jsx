const ApiCall = async () => {
  let apikey = "584a968330c9a233c596f56784cf5806";
  let apiid = "7ba2100d";
  let userValue = document.getElementById("user_input").value;
  console.log("this is query", userValue);
  let ev = document.getElementById("diets_label");
  let evres = ev.options[ev.selectedIndex].value;
  console.log("this is dietValue", evres);
  // let apiid = import.meta.env.APIID
  const res = await fetch(
    `https://api.edamam.com/api/recipes/v2?q=${userValue}&app_key=${apikey}&_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAQARGJGB2EWa1BxBAYGUXlSB2IQZAQiVwYPRjFGBDFGMlFwVlFTF2RHBzEbMFAhDVcVLnlSVSBMPkd5AAMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&diet=${evres}&health=kosher&type=public&app_id=${apiid}`
  );
  const data = await res.json();
  console.log(data.hits);
  const hits = data.hits;
  console.log("this is data hits", hits);
  const resHolder = document.createElement("div");
  resHolder.id = "holder";
  document.body.appendChild(resHolder);
  hits.map((hitsResults) => {
    console.log("this is hitsResults", hitsResults);

    const resultList = document.createElement("div");
    // resultList.style.listStyle = "none"
    const recipeLabel = document.createElement("p");
    const recipeImage = document.createElement("img");
    const recipeType = document.createElement("p");
    const recipeMealType = document.createElement("p");
    const recipeTime = document.createElement("p");
    const recipeYield = document.createElement("p");

    const label = hitsResults.recipe.label;

    recipeLabel.innerText = `${label}`;

    const type = hitsResults.recipe.cuisineType;
    recipeType.innerText = `Cuisine: ${type}`;

    const image = hitsResults.recipe.image;
    recipeImage.src = image;

    const mealType = hitsResults.recipe.mealType;
    recipeMealType.innerText = `Meal: ${mealType}`;

    const time = hitsResults.recipe.totalTime;
    recipeTime.innerText = `Time: ${time} minutes`;

    const totalyield = hitsResults.recipe.yield;
    recipeYield.innerText = `Yield: ${totalyield}`;

    resultList.appendChild(recipeLabel);
    resultList.appendChild(recipeType);
    resultList.appendChild(recipeMealType);
    resultList.appendChild(recipeTime);
    resultList.appendChild(recipeYield);
    resultList.appendChild(recipeImage);
    resHolder.appendChild(resultList);

    const ing = hitsResults.recipe.ingredients;
    ing.map((ingredient) => {
      console.log("this is ingredient", ingredient);
      const test = document.createElement("div");
      const testFirst = document.createElement("p");
      const first = ingredient.text;
      const firstText = document.createTextNode(first);
      testFirst.appendChild(firstText);
      test.appendChild(testFirst);

      resHolder.appendChild(test);
    });
  });

  return <div></div>;
};

export default ApiCall;
