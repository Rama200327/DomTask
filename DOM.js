// ============================================
// Task 1 — DOM Structure Analysis
// ============================================

const container = document.getElementById("container");

// Log all children
console.log("=== Task 1: All Children ===");
console.log(container.children);

// First and last child
console.log("First child:", container.firstElementChild);
console.log("Last child:", container.lastElementChild);

// Siblings of middle child
const middleChild = document.getElementById("middle-child");
console.log("Previous sibling:", middleChild.previousElementSibling);
console.log("Next sibling:", middleChild.nextElementSibling);

// Highlight first and last child visually
container.firstElementChild.classList.add("highlight");
container.lastElementChild.classList.add("highlight");

// ============================================
// Task 2 — Dynamic Content Builder
// ============================================

const task2Section = document.getElementById("task2");

// Create card div
const card = document.createElement("div");
card.classList.add("card");

// Create image
const img = document.createElement("img");
img.src = "https://picsum.photos/280/160";
img.alt = "Card Image";

// Create card body
const cardBody = document.createElement("div");
cardBody.classList.add("card-body");

// Create title
const title = document.createElement("h3");
title.textContent = "Dynamic Card Title";

// Create description
const description = document.createElement("p");
description.textContent =
  "This card was created fully using JavaScript — no HTML was written for it.";

// Build the card
cardBody.appendChild(title);
cardBody.appendChild(description);
card.appendChild(img);
card.appendChild(cardBody);

// Inject card into page
task2Section.appendChild(card);

// ============================================
// Task 3 — DOM Traversing Challenge
// ============================================

console.log("=== Task 3: DOM Traversing ===");

// Access target item using traversal only (no querySelector)
const wrapper = document.getElementById("wrapper");
const ul = wrapper.children[0]; // ul
const targetItem = ul.children[2]; // li: Item 3

console.log("Target item:", targetItem.textContent);

// Highlight target
targetItem.classList.add("active");

// Highlight siblings
const prevSibling = targetItem.previousElementSibling;
const nextSibling = targetItem.nextElementSibling;

prevSibling.classList.add("sibling");
nextSibling.classList.add("sibling");

console.log("Previous sibling:", prevSibling.textContent);
console.log("Next sibling:", nextSibling.textContent);

// ============================================
// Task 4 — Replace & Update
// ============================================

const replaceContainer = document.getElementById("replace-container");
const oldElement = document.getElementById("old-element");

// Create new element
const newElement = document.createElement("p");
newElement.textContent = "This is the NEW element — replaced successfully!";
newElement.classList.add("new-element");

// Replace old with new
replaceContainer.replaceChild(newElement, oldElement);

// Update text content
newElement.textContent = "Updated: NEW element with modified text content!";

// Modify classes
newElement.classList.add("updated");

console.log("=== Task 4: Element replaced and updated ===");
