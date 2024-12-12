let bagitems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagitems');
  bagitems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsonHomePage();
  displayBagIcon();
}


function addToBag(itemId) {
  bagitems.push(itemId);
  localStorage.setItem('bagitems', JSON.stringify(bagitems));
  displayBagIcon();


}
function displayBagIcon()
{
  
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagitems.length>0)
  {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagitems.length;
  }
  else{
    bagItemCountElement.style.visibility = 'hidden';
  }
  

}

function displayItemsonHomePage() {
let itemsContainerElement = document.querySelector('.items-container');

if(!itemsContainerElement) 
{
  return;
}

let innerHTML = '';

items.forEach((item) => {
    innerHTML += `
    <div class="item-container">
        <img
            class="item-img"
            src="${item.image}"
            alt="item-img" />
        <div class="ratings">${item.rating.stars} 
    ⭐| ${item.rating.count}</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`;
}

);
itemsContainerElement.innerHTML = innerHTML;
}