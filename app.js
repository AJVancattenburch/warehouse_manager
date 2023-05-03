let p = ['']

const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]



function drawPackages(packages) {
  let template = ''
  for(let i = 0; i < packages.length; i++) {
    let package = packages[i]
   template  += `<li>${package.to}</li>`
  }
  document.getElementById('packages-container').innerHTML = template
}

function drawFragilePackages(){
  const fragilePackages = packages.filter(package => package.isFragile == false)
  console.log(fragilePackages);
  drawPackages(fragilePackages)
}

function drawFreePackages(){
  const priorityLevelPackages = packages.filter(package => package.priorityLevel == 'free')
  console.log(priorityLevelPackages);
  drawPackages(priorityLevelPackages)
}

function drawStandardPackages(){
  const priorityLevelPackages = packages.filter(package => package.priorityLevel == 'standard')
  console.log(priorityLevelPackages);
  drawPackages(priorityLevelPackages)
}

function drawExpressPackages(){
  const priorityLevelPackages = packages.filter(package => package.priorityLevel == 'express')
  console.log(priorityLevelPackages);
  drawPackages(priorityLevelPackages)
}

function drawLightPackages(){
  const packageWeight = packages.filter(package => package.weight <= 2)
  console.log(packageWeight);
  drawPackages(packageWeight)
}

function drawHeavyPackages(){
  const packageWeight = packages.filter(package => package.weight > 2)
  console.log(packageWeight);
  drawPackages(packageWeight)
}



function drawToPackages(name){

  const options = ['Sir Harrington IV', 'Master Mercutio', 'Mistress Ravenfeather', 'B. Robert Brown', 'Chancellor Wallace', 'Sarah Sharm', 'Tae Lien']

  /**const findIndex = options.length
**/

  let index = options.findIndex(str => str == name)
  console.log(index)

  const toPackages = packages.filter(package => package.to == name)
  console.log(toPackages);
  drawPackages(toPackages)
}

function drawPackagesTrackingNumber(){
  const fragilePackages = packages.filter(package => package.isFragile == false)
  console.log(fragilePackages);
  drawPackages(fragilePackages)
}
