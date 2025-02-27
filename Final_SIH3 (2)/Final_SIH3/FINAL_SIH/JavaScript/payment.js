function showTab(tab) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach((content) => {
      content.style.display = 'none';
    });
  
    // Remove 'active' class from all tabs
    document.querySelectorAll('.tab').forEach((tab) => {
      tab.classList.remove('active');
    });
  
    // Show selected tab content
    document.getElementById(tab).style.display = 'block';
    document.getElementById(tab + '-btn').classList.add('active');
  }
  
  // Show card-specific form based on card type selection
  function showCardForm() {
    const cardType = document.getElementById('card-type').value;
    const cardForms = document.querySelectorAll('.card-form');
    
    // Hide all card forms
    cardForms.forEach((form) => {
      form.style.display = 'none';
    });
  
    // Show the selected card form
    if (cardType === 'Visa') {
      document.getElementById('visa-form').style.display = 'block';
    } else if (cardType === 'Mastercard') {
      document.getElementById('mastercard-form').style.display = 'block';
    } else if (cardType === 'RuPay') {
      document.getElementById('rupay-form').style.display = 'block';
    }
  }