import * as ProductRepository from "./ProductRepository.js";
import { CreateProductView } from "./CreateProductView.js";

const queryString = new URLSearchParams( location.search );
const qsCategory = queryString.get( "category" );
const categoryName = document.getElementById( "category-name" );
const categoryMenuItem = document.getElementById( "categoryMenuItem" );
const heroWrapper = document.getElementById( "hero-wrap" );
const productsWrap = document.getElementById( "products-list" );
const searchInput = document.getElementById( "search-input" );
const inputForm = document.querySelector( ".input-form" );
let filter = document.querySelector( ".filter" );
let filterBtn = document.querySelector( ".btn-filter" );
let filterListBrands = document.querySelector( ".filter__list-brands" );
let filterListMaterials = document.querySelector( ".filter__list-materials" );
let filterListColors = document.querySelector( ".filter__list-colors" );
let allWatches = document.getElementById( 'all_watches' );
let errorBlock = document.querySelector( '.error-list' );
let lastActiveButton;

function showProducts ( products ) {
  productsWrap.innerHTML = '';
  products.forEach( ( product ) => {
    let element = CreateProductView( product );
    productsWrap.appendChild( element );
  } );
  }

let productsList = await ProductRepository.getProductsByCategory( qsCategory );
let category = await ProductRepository.getCategoryById( qsCategory );
categoryName.innerHTML = category.name;
categoryMenuItem.innerHTML = category.name;
heroWrapper.style.backgroundImage = "url(" + category.backgroundImage + ")";
showProducts( productsList );

let productsMaterial = function filterProductsMaterial ( material ) {
  return productsList.filter( item => item.material === material )
}
let productsBrand = function filterProductsBrand ( brand ) {
  return productsList.filter( item => item.brand === brand )
}

let productsColor = function filterProductsColor ( color ) {
  return productsList.filter( item => item.color === color )
}

//Show all watches
allWatches.addEventListener( 'click', () => {
  showProducts( productsList );
  if ( lastActiveButton ) {
    lastActiveButton.classList.remove( 'active' );
  }
  lastActiveButton = allWatches;
  allWatches.classList.add( 'active' );
} )

//Materials
function getListMaterials () {
  let materials = productsList.map( product => {
    return product.material;
  } );
  return [...new Set( materials )];
}
let materialLists = getListMaterials();

materialLists.forEach( material => {
  let elem = document.createElement( 'li' );
  elem.innerHTML = `<button>${material}</button>`;
  elem.addEventListener( 'click', () => {
    showProducts( productsMaterial( material ) );
    if ( lastActiveButton ) {
      lastActiveButton.classList.remove( 'active' );
    }
    lastActiveButton = elem;
    elem.classList.add( 'active' );
  } );
  filterListMaterials.appendChild( elem );
} )

//Brands
function getListBrands () {
  let brands = productsList.map( product => {
    return product.brand;
  } );
  return [...new Set( brands )]
}
let brandLists = getListBrands();

brandLists.forEach( brand => {
  let elem = document.createElement( 'li' );
  elem.innerHTML = `<button>${brand}</button>`;

  elem.addEventListener( 'click', () => {
    showProducts( productsBrand( brand ) );
    if ( lastActiveButton ) {
      lastActiveButton.classList.remove( 'active' );
    }
    lastActiveButton = elem;
    elem.classList.add( 'active' );
  } );
  filterListBrands.appendChild( elem );
} )


//Colors
function getListColors () {
  let colors = productsList.map( product => {
    return product.color;
  } );
  return [...new Set( colors )]
}
let colorLists = getListColors();

colorLists.forEach( color => {
  let elem = document.createElement( 'li' );
  elem.innerHTML = `<button>${color}</button>`;
  elem.addEventListener( 'click', () => {
    showProducts( productsColor( color ) );
    if ( lastActiveButton ) {
      lastActiveButton.classList.remove( 'active' );
    }
    lastActiveButton = elem;
    elem.classList.add( 'active' );
  } );
  filterListColors.appendChild( elem );
} )


//Search inside category
inputForm.addEventListener(
  "submit",
  ( e ) => {
      e.preventDefault();
    },
    false
  );

function searchProductsInCategory ( searchText ) {
  let lowerCaseText = searchText.toLowerCase();

  return productsList.filter(
    ( product ) =>
      product.name.toLowerCase().includes( lowerCaseText ) ||
      product.brand.toLowerCase().includes( lowerCaseText ) ||
      product.desc.toLowerCase().includes( lowerCaseText ) ||
      product.color.toLowerCase().includes( lowerCaseText ) ||
      product.material.toLowerCase().includes( lowerCaseText )
  );
}

inputForm.addEventListener(
  "keyup",
  async ( e ) => {
      e.preventDefault();
    let searchResults = searchProductsInCategory( searchInput.value );
      if (searchResults.length === 0) {
        errorBlock.innerHTML = `<h3 class="filter-error">
       Sorry, no products matched your search! :( 
       </h3>`;
        productsWrap.style.display = 'none';
      } else {
        errorBlock.innerHTML = "";
        productsWrap.style.display = 'grid';
        searchResults.forEach((product) => {
          let element = CreateProductView(product);
          productsWrap.appendChild(element);
        });
      }
    },
    false
);
