const checkForGenerator = (element) => {
  // Check for any element that has "randomnumber" as a partial class.
  const generatorExists = element.querySelector('[class*="randomnumber"]');
  return generatorExists ? true : false;
}

const getGeneratorContainer = () => {
  const xpath = '/html/body/div[5]/div/div[13]/div/div[2]/div[2]/div/div/div[1]/div/block-component';
  const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const generatorContainer = result.singleNodeValue;

  return generatorContainer;
}

export {
  getGeneratorContainer,
  checkForGenerator
}
