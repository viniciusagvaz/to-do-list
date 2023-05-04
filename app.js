const formAddTodo = document.querySelector(".form-add-todo");
const inputSearchTodo = document.querySelector(".form-search input");
const todosContainer = document.querySelector(".todos-container");

const hiddingTodoOnSearch = (event) => {
	const inputValue = event.target.value.trim().toLowerCase();
	const todo = Array.from(todosContainer.children);

	todo
		.filter((todo) => !todo.textContent.toLowerCase().includes(inputValue))
		.forEach((todo) => {
			todo.classList.remove("d-flex");
			todo.classList.add("hidden");
		});
	todo
		.filter((todo) => todo.textContent.toLowerCase().includes(inputValue))
		.forEach((todo) => {
			todo.classList.remove("hidden");
			todo.classList.add("d-flex");
		});
};
const deletingTodo = (event) => {
	const clickedElement = event.target;
	const deleteTodo = document.querySelector("[data-trash]");
	const todo = document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`);

	if (deleteTodo) {
		todo.remove();
	}
};
const addingTodo = (event) => {
	event.preventDefault();

	const inputValue = event.target.add.value.trim();

	if (inputValue.length) {
		todosContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span> ${inputValue} </span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
      </li>
      `;
		event.target.reset();
	}
};


inputSearchTodo.addEventListener("input", hiddingTodoOnSearch);
todosContainer.addEventListener("click", deletingTodo);
formAddTodo.addEventListener("submit", addingTodo);