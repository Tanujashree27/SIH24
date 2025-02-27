// Example data for recommendations (this can be replaced by real data)
const recommendations = [
    {
        name: "Storage A",
        location: "City A",
        availableSpace: "200 tons",
    },
    {
        name: "Storage B",
        location: "City B",
        availableSpace: "100 tons",
    },
    {
        name: "Storage C",
        location: "City C",
        availableSpace: "150 tons",
    }
];

// Function to display recommendations
function displayRecommendations() {
    const recommendationBox = document.querySelector('.recommendation-box');
    recommendationBox.innerHTML = ''; // Clear existing content

    recommendations.forEach(rec => {
        const item = document.createElement('div');
        item.classList.add('recommendation-item');

        item.innerHTML = `
            <h3>${rec.name}</h3>
            <p>Location: ${rec.location}</p>
            <p>Available Space: ${rec.availableSpace}</p>
            <button class="cta-button">View Details</button>
        `;

        recommendationBox.appendChild(item);
    });
}

// Call the function to display recommendations
displayRecommendations();
