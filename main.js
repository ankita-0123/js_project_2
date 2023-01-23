function saveToLocalStorage(event){

    event.preventDefault();

    const product = event.target.product.value;

    const price = event.target.price.value;

    const productname = event.target.productname.value;

    const category = event.target.category.value;

    localStorage.setItem('product',product);
    localStorage.setItem('price',price);
    localStorage.setItem('productname',productname);
    localStorage.setItem('category',category);

    const obj = {

        product,

        price,

        productname,

        category

    }

    localStorage.setItem(obj.product,JSON.stringify(obj));
    showNewUserScreen(obj)   
}
function showNewUserScreen(obj){

    const parentElem = document.getElementById('ListOfCategory');

    const childElem = document.createElement('li');

    childElem.textContent = obj.product + ' - ' + obj.price + ' - ' + obj.productname + '-' + obj.category + '-';

    const deleteButton = document.createElement('input');

    deleteButton.type = "button";

    deleteButton.value = 'Delete';

    deleteButton.onclick = () => {
        localStorage.removeItem(obj.product);

        parentElem.removeChild(childElem);
    }

    childElem.appendChild(deleteButton);

    parentElem.appendChild(childElem);

    const editButton = document.createElement('input');

    editButton.type = 'button';
    editButton.value = 'Edit'
    editButton.onclick = () => {
        localStorage.removeItem(obj.product);
        parentElem.removeChild(childElem);
        document.getElementById('productInputTag').value = obj.product
        document.getElementById('priceInputTag').value = obj.price
        document.getElementById('productnameInputTag').value = obj.productname
        document.getElementById('categoryInputTag').value = obj.category
        

    }
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);

    parentElem.appendChild(childElem);

}
