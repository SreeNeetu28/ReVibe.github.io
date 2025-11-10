function toggleCheckbox(selectedId) {
    document.getElementById('customer').checked = (selectedId === 'customer');
    document.getElementById('seller').checked = (selectedId === 'seller');
}