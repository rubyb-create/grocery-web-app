window.addEventListener('load', () => {
    const form = document.querySelector("#new-grocery-form");
    const input = document.querySelector("#new-grocery-input");
    const list_el = document.querySelector("#groceries");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const grocery = input.value;

        if (!grocery) {
            alert("Add Groceries!");
            return;
        }

        const grocery_el = document.createElement("div");
        grocery_el.classList.add("grocery");

        const grocery_content_el = document.createElement("div");
        grocery_content_el.classList.add("content");


        grocery_el.appendChild(grocery_content_el);

        const grocery_input_el = document.createElement("input");
        grocery_input_el.classList.add("text");
        grocery_input_el.type = "text";
        grocery_input_el.value = grocery;
        grocery_input_el.setAttribute("readonly", "readonly");

        grocery_content_el.appendChild(grocery_input_el);

        const grocery_actions_el = document.createElement("div");
        grocery_actions_el.classList.add("actions");

        const grocery_edit_el = document.createElement("button");
        grocery_edit_el.classList.add("edit");
        grocery_edit_el.innerHTML = "edit ";


        const grocery_delete_el = document.createElement("button");
        grocery_delete_el.classList.add("delete");
        grocery_delete_el.innerHTML = "delete";

        grocery_actions_el.appendChild(grocery_edit_el);
        grocery_actions_el.appendChild(grocery_delete_el);

        grocery_el.appendChild(grocery_actions_el);
        list_el.appendChild(grocery_el);

        input.value = "";

        grocery_edit_el.addEventListener('click', () => {
            if (grocery_edit_el.innerText.toLowerCase() ==
                "edit") {
                grocery_input_el.removeAttribute("readonly");
                grocery_input_el.focus();
                grocery_edit_el.innerText = "Save";
            } else {
                grocery_input_el.setAttribute('readonly', 'readonly');
                grocery_edit_el.innerText = 'Edit';
            }

        })

        grocery_delete_el.addEventListener('click', () => {
            list_el.removeChild(grocery_el);

        })

    })


})

function myFunction() {
    const list = document.getElementById("groceries");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

