// app.js

document.addEventListener('DOMContentLoaded', () => {
    const applyFiltersButton = document.getElementById('applyFilters');
    const saveFiltersButton = document.getElementById('saveFilters');

    // Event listeners for filter buttons
    applyFiltersButton.addEventListener('click', applyFilters);
    saveFiltersButton.addEventListener('click', saveFilters);
});

function applyFilters() {
    const rating = document.getElementById('rating').value;
    const storageType = document.getElementById('storageType').value;
    const temperature = document.getElementById('temperature').value;
    const bestFor = document.getElementById('bestFor').value;
    const capacity = document.getElementById('capacity').value;
    const discount = document.getElementById('discount').value;
    const distance = document.getElementById('distance').value;

    // Fetch and filter cold storage items based on selected filters
    // This is a placeholder for AJAX or fetch request to your server
    // Replace with actual data fetching and filtering logic
    console.log('Applying Filters:');
    console.log(`Rating: ${rating}`);
    console.log(`Storage Type: ${storageType}`);
    console.log(`Temperature: ${temperature}`);
    console.log(`Best For: ${bestFor}`);
    console.log(`Capacity: ${capacity}`);
    console.log(`Discount: ${discount}`);
    console.log(`Distance: ${distance}`);

    // Example of updating storage listings (replace with actual data)
    const storageItemsContainer = document.getElementById('storage-items');
    storageItemsContainer.innerHTML = `
        <div class="storage-box">
            <img src="coldstorage-example.jpg" alt="Cold Storage">
            <div class="storage-details">
                <h3>Filtered Cold Storage Name</h3>
                <p>Capacity: ${capacity} Tons</p>
                <p>Rating: ⭐⭐⭐⭐⭐</p>
                <p>Discount: ${discount}</p>
                <p>Rent Price: $200/month</p>
                <p>Description: Ideal for ${bestFor}.</p>
                <button onclick="window.location.href='contact.php'">Contact</button>
                <button onclick="window.location.href='details.php?id=1'">View Details</button>
            </div>
        </div>
    `;
}

function saveFilters() {
    const filters = {
        rating: document.getElementById('rating').value,
        storageType: document.getElementById('storageType').value,
        temperature: document.getElementById('temperature').value,
        bestFor: document.getElementById('bestFor').value,
        capacity: document.getElementById('capacity').value,
        discount: document.getElementById('discount').value,
        distance: document.getElementById('distance').value
    };

    // Save filters to local storage or server
    localStorage.setItem('savedFilters', JSON.stringify(filters));

    alert('Filters saved successfully!');
}

// Optional: Load saved filters on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedFilters = JSON.parse(localStorage.getItem('savedFilters'));
    if (savedFilters) {
        document.getElementById('rating').value = savedFilters.rating;
        document.getElementById('storageType').value = savedFilters.storageType;
        document.getElementById('temperature').value = savedFilters.temperature;
        document.getElementById('bestFor').value = savedFilters.bestFor;
        document.getElementById('capacity').value = savedFilters.capacity;
        document.getElementById('discount').value = savedFilters.discount;
        document.getElementById('distance').value = savedFilters.distance;

        // Update filter display values
        document.getElementById('rating_value').textContent = savedFilters.rating;
        document.getElementById('temperature_value').textContent = savedFilters.temperature;
        document.getElementById('capacity_value').textContent = savedFilters.capacity;
        document.getElementById('distance_value').textContent = savedFilters.distance;

        // Apply saved filters on page load (optional)
        applyFilters();
    }
});
