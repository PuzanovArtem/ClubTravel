export const orderList = () => {
    const orders = [
        { number: 1588665993, amount: 554.00, email: 'admin@admin.ee', status: 'Оплачено', date: '18 июня 2020 15:01' },
        { number: 1588665994, amount: 654.00, email: 'admin2@admin.ee', status: 'В обработке', date: '19 июня 2020 16:02' },
        { number: 1588665995, amount: 754.00, email: 'admin3@admin.ee', status: 'В обработке', date: '20 июня 2020 17:03' },
        { number: 1588665993, amount: 554.00, email: 'admin@admin.ee', status: 'Оплачено', date: '18 июня 2020 15:01' },
        { number: 1588665994, amount: 654.00, email: 'admin2@admin.ee', status: 'В обработке', date: '19 июня 2020 16:02' },
        { number: 1588665995, amount: 754.00, email: 'admin3@admin.ee', status: 'В обработке', date: '20 июня 2020 17:03' },
        { number: 1588665993, amount: 554.00, email: 'admin@admin.ee', status: 'Оплачено', date: '18 июня 2020 15:01' },
        { number: 1588665994, amount: 654.00, email: 'admin2@admin.ee', status: 'В обработке', date: '19 июня 2020 16:02' },
        { number: 1588665995, amount: 754.00, email: 'admin3@admin.ee', status: 'В обработке', date: '20 июня 2020 17:03' },
        { number: 1588665993, amount: 554.00, email: 'admin@admin.ee', status: 'Оплачено', date: '18 июня 2020 15:01' },
        { number: 1588665994, amount: 654.00, email: 'admin2@admin.ee', status: 'В обработке', date: '19 июня 2020 16:02' },
        { number: 1588665995, amount: 754.00, email: 'admin3@admin.ee', status: 'В обработке', date: '20 июня 2020 17:03' },
    ];

    const itemsPerPage = 9;
    const itemsPerPageMob = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(orders.length / itemsPerPage);

    const ordersTbody = document.querySelector('.orders-tbody');
    const ordersTbodyMob = document.querySelector('.orders-tbody-mob');
    const displayInfo = document.querySelector('.display-info');
    const displayInfoMob = document.querySelector('.display-info-mob');
    const currentPageElement = document.querySelector('.current-page');
    const totalPagesElement = document.querySelector('.total-pages');
    const currentPageElementMob = document.querySelector('.current-page-mob');
    const totalPagesElementMob = document.querySelector('.total-pages-mob');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
     const prevBtnMob = document.querySelector('.prev-btn-mob');
    const nextBtnMob = document.querySelector('.next-btn-mob');

    function renderOrders() {
        ordersTbody.innerHTML = '';

        const start = (currentPage - 1) * itemsPerPage;
        const end = Math.min(start + itemsPerPage, orders.length);
        const currentOrders = orders.slice(start, end);

        currentOrders.forEach(order => {
            const row = document.createElement('tr');
            row.classList.add('account-orders__tbody-tr');

            const statusClass = order.status === "Оплачено" 
                ? "account-orders__status--paid" 
                : "account-orders__status--unpaid";

            row.innerHTML = `
                <td class="account-orders__td">${order.number}</td>
                <td class="account-orders__td">${order.amount + '.00'}</td>
                <td class="account-orders__td">${order.email}</td>
                <td class="account-orders__td account-orders__status ${statusClass}">${order.status}</td>
                <td class="account-orders__td">${order.date}</td>
            `;
            ordersTbody.appendChild(row);
        });

        displayInfo.textContent = `Показано ${end} из ${orders.length}`;
        currentPageElement.textContent = currentPage;
        totalPagesElement.textContent = totalPages;

        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    function renderOrdersMob() {
        ordersTbodyMob.innerHTML = '';

        const start = (currentPage - 1) * itemsPerPageMob;
        const end = Math.min(start + itemsPerPageMob, orders.length);
        const currentOrders = orders.slice(start, end);

        currentOrders.forEach(order => {
            const row = document.createElement('div');
            row.classList.add('account-orders__card');

            const statusClass = order.status === 'Оплачено' 
                ? 'account-orders__status-mob--paid' 
                : 'account-orders__status-mob--unpaid';

            row.innerHTML = `
                <span class="account-orders__th">Номер заказа</span>
          <span class="account-orders__th">${order.number}</span>
          <span class="account-orders__th">Сумма</span>
          <span class="account-orders__td">${order.amount}</span>
          <span class="account-orders__th">E-mail</span>
          <span class="account-orders__td">${order.email}</span>
          <span class="account-orders__th">Cтатус</span>
          <span class="account-orders__td account-orders__status-mob ${statusClass}">${order.status}</span>
          <span class="account-orders__th">Дата</span>
          <span class="account-orders__td">${order.date}</span>
            `;
            ordersTbodyMob.appendChild(row);
        });

        displayInfoMob.textContent = `Показано ${end} из ${orders.length}`;
        currentPageElementMob.textContent = currentPage;
        totalPagesElementMob.textContent = totalPages;

        prevBtnMob.disabled = currentPage === 1;
        nextBtnMob.disabled = currentPage === totalPages;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderOrders();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderOrders();
        }
    });

    prevBtnMob.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderOrdersMob();
        }
    });

    nextBtnMob.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderOrdersMob()
        }
    });

    renderOrders();
    renderOrdersMob();
};
