export function toggleDropdown(dropdown) {
    dropdown.classList.toggle('dropdown--open');
}

export function setDropdownValue(dropdown, value) {
    dropdown.querySelector('.dropdown__current').textContent = value;
    dropdown.classList.remove('dropdown--open');
}

export function initializeDropdowns() {
    document.querySelectorAll('.dropdown__row').forEach(function(row) {
        row.addEventListener('click', function() {
            toggleDropdown(this.parentElement);
        });
    });

    document.querySelectorAll('.dropdown__list .dropdown__item').forEach(function(item) {
        item.addEventListener('click', function() {
            const dropdown = this.closest('.dropdown');
            setDropdownValue(dropdown, this.textContent);
        });
    });

    window.addEventListener('click', function(e) {
        document.querySelectorAll('.dropdown').forEach(function(dropdown) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('dropdown--open');
            }
        });
    });
}
