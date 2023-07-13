function showCategory(categoryId) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.style.display = 'none';
    });
    const category = document.getElementById(categoryId);
    if (category) {
        category.style.display = 'block';
    }
}
const categoryItems = document.querySelectorAll('.list-group-item');
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        categoryItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
        const categoryId = item.getAttribute('data-category');
        showCategory(categoryId);
    });
});
if (categoryItems.length > 0) {
    const firstItem = categoryItems[0];
    const categoryId = firstItem.getAttribute('data-category');
    showCategory(categoryId);
}
addBackToTopButton();
